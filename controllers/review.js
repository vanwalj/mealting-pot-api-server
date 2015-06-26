/**
 * Created by Jordan on 6/26/2015.
 */
'use strict';

const _ = require('underscore');

const models            = require('../models');

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