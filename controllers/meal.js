/**
 * Created by Jordan on 19/06/2015.
 */
'use strict';

const _ = require('underscore');

const models            = require('../models');
const mealsLocation     = require('../lib/meals-location');

module.exports.getMeals = function *getMeals(next) {

    let where = _.extend({}, this.params);

    if (this.query.latitude && this.query.longitude) {
        let mealsId = yield mealsLocation.nearbyAsync(this.query.latitude, this.query.longitude, this.query.radius || 5000);
        _.extend(where, { id: { '$in': mealsId } });
    }

    this.body = yield models.Meal.findAll({ where: where });

    yield next;
};

module.exports.getMeal = function *getMeal(next) {
    //todo report an issue @sequelize
    //this.body = yield models.Meal.findOne(this.params.mealId);

    try {
        this.body = yield models.Meal.findOne({ where: { id: this.params.mealId } });
    } catch (e) {
        this.assert(e.name !== 'SequelizeDatabaseError', 404);
        throw e;
    }
    yield next;
};

module.exports.getDishes = function *getDishes(next) {
    this.body = yield models.Dish.findAll({ where: this.params });

    yield next;
};

module.exports.postMeal = function *postMeal(next) {
    this.body   = yield models.Meal.create(_.extend({}, this.request.body, { userId: this.state.user.id }));
    this.status = 201;

    yield next;
};

module.exports.postDish = function *postDish(next) {
    let hasMeal = yield this.state.user.hasMeal(this.params.mealId);
    this.assert(hasMeal, 404, "No such meal");

    this.body   = yield models.Dish.create(_.extend({}, this.request.body, { mealId: this.params.mealId }));
    this.state  = 201;

    yield next;
};

module.exports.deleteDish = function *deleteDish(next) {

    let transaction = yield models.sequelize.transaction();

    let dish = yield models.Dish.findOne({ where: { id: this.params.dishId }}, { transaction: transaction });
    this.assert(dish, 404);

    let meal = yield dish.getMeal({ transaction: transaction });
    this.assert(meal && meal.userId === this.state.user.id, 409);

    yield dish.destroy({ transaction: transaction });

    transaction.commit();

    yield next;
};

module.exports.book = function *book(next) {

    let transaction = yield models.sequelize.transaction();

    let requestedSeats = this.request.body.seats || 1;
    let meal = yield models.Meal.findOne(this.params.mealId, { transaction: transaction });
    let reservedSeats = yield models.Booking.sum('seats', { where: { mealId: this.params.mealId }, transaction: transaction });
    let remainingSeats = meal.seats - reservedSeats;

    this.assert(remainingSeats >= requestedSeats, 400, 'Not enough remaining seat');

    this.body   = yield models.Booking.create(_.extend({}, {
        seats: requestedSeats
    }, {
        userId: this.state.user.id, mealId: this.params.mealId
    }), { transaction:transaction });

    transaction.commit();

    this.state  = 201;

    yield next;
};

module.exports.getBookings = function *getBookings(next) {
    this.body = yield models.Booking.findAll({ where: { mealId: this.params.mealId } });

    yield next;
};

module.exports.getBooking = function *getBooking(next) {
    this.body = yield models.Booking.findOne(this.params.bookingId);
    this.assert(this.body, 404);

    yield next;
};

module.exports.getUserBookings = function *getUserBookings(next) {
    this.body = yield models.Booking.findAll({ where: { userId: this.state.user ? this.state.user.id : this.params.userId } });

    yield next;
};

module.exports.deleteBooking = function *deleteBooking(next) {
    yield models.Booking.destroy({ where: { id: this.params.mealId, userId: this.state.user.id } });

    yield next;
};

module.exports.postReview = function *postReview(next) {
    let booking = yield models.Booking.findOne(this.params.bookingId);
    this.assert(booking, 404);

    let reviewee;
    let reviewer = yield booking.getUser();
    let meal = yield booking.getMeal();
    if (reviewer.id != this.state.user.id) {
        reviewee = reviewer;
        reviewer = yield meal.getUser();
        this.assert(reviewer.id === this.state.user, 409);
    } else {
        reviewee = yield meal.getUser();
    }

    let transaction = yield models.sequelize.transaction();

    let virgin = yield models.Review.count({ where: {
        bookingId: booking.id,
        reviewerId: reviewer.id,
        revieweeId: reviewee.id
    } }, { transaction: transaction });
    this.assert(virgin === 0, 400, 'There is already a review for this booking');

    this.body = models.Review.create(_.extend({}, this.request.body, {
        bookingId: booking.id,
        reviewerId: reviewer.id,
        revieweeId: reviewee.id
    }), { transaction: transaction });

    transaction.commit();

    this.status = 201;

    yield next;
};

module.exports.getReviews = function *getReviews(next) {
    this.body = yield models.Reviews.findAll({ where: { bookingId: this.params.bookingId } });

    yield next;
};

module.exports.getUserReviews = function *getUserReview(next) {
    this.body = {};

    this.body.asReviewer = yield models.Review.findAll({ where: { reviewerId: this.state.user ? this.state.user.id : this.params.userId } });
    this.body.asReviewee = yield models.Review.findAll({ where: { revieweeId: this.state.user ? this.state.user.id : this.params.userId } });

    yield next;
};

module.exports.getMealReviews = function *getMealReview(next) {
    this.body = yield models.Review.findAll({ where: { mealId: this.params.mealId } });

    yield next;
};