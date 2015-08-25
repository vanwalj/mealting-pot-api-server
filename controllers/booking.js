/**
 * Created by Jordan on 6/26/2015.
 */
'use strict';

const _ = require('underscore');

const models            = require('../models');

module.exports.book = function *book(next) {

    let transaction = yield models.sequelize.transaction();

    try {
        let requestedSeats = this.request.body.seats || 1;
        let meal = yield models.Meal.findOne({ where: { id: this.params.mealId } }, { transaction: transaction });
        this.assert(meal, 404, 'Meal not found');

        let reservedSeats = yield models.Booking.sum('seats', { where: { mealId: this.params.mealId }});
        let remainingSeats = meal.seats - (_.isNaN(reservedSeats) ? 0 : reservedSeats);

        console.log('Seats', meal.seats);
        console.log('Reserved', reservedSeats);
        console.log('Remaining', remainingSeats);
        console.log('Requested', requestedSeats);

        this.assert(remainingSeats >= requestedSeats, 400, 'Not enough remaining seat');

        this.body   = yield models.Booking.create(_.extend({}, {
            seats: requestedSeats
        }, {
            userId: this.state.user.id, mealId: this.params.mealId
        }), { transaction:transaction });

        transaction.commit();

        this.state  = 201;
    } catch (e) {
        transaction.rollback();
        throw e;
    }

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
