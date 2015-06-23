/**
 * Created by Jordan on 19/06/2015.
 */
'use strict';

const Router    = require('koa-joi-router');
const Joi       = require('joi');

const router    = Router();

const secuCtrl  = require('../controllers/security');
const mealCtrl  = require('../controllers/meal');

router.route({
    method: 'GET',
    path: '/meals',
    handler: mealCtrl.getMeals
});

router.route({
    method: 'GET',
    path: '/users/:userId/meals',
    handler: mealCtrl.getMeals
});

router.route({
    method: 'GET',
    path: '/users/me/bookings',
    handler: [
        secuCtrl.bearerAuth,
        mealCtrl.getUserBookings
    ]
});

router.route({
    method: 'GET',
    path: '/users/:userId/booking',
    handler: mealCtrl.getUserBookings
});

router.route({
    method: 'GET',
    path: '/meals/:mealId',
    handler: mealCtrl.getMeal
});

router.route({
    method: 'GET',
    path: '/meals/:mealId/dishes',
    handler: mealCtrl.getDishes
});

router.route({
    method: 'POST',
    path: '/meals',
    validate: { type: 'json' },
    handler: [
        secuCtrl.bearerAuth,
        mealCtrl.postMeal
    ]
});

router.route({
    method: 'POST',
    path: '/meals/:mealId/dishes',
    validate: { type: 'json' },
    handler: [
        secuCtrl.bearerAuth,
        mealCtrl.postDish
    ]
});

router.route({
    method: 'DELETE',
    path: '/dishes/:dishId',
    handler: mealCtrl.deleteDish
});

router.route({
    method: 'POST',
    path: '/meals/:mealId/bookings',
    validate: { type: 'json' },
    handler: [
        secuCtrl.bearerAuth,
        mealCtrl.book
    ]
});

router.route({
    method: 'GET',
    path: '/meals/:mealId/bookings',
    handler: mealCtrl.getBookings
});

router.route({
    method: 'GET',
    path: '/bookings/:bookingId',
    handler: mealCtrl.getBooking
});

router.route({
    method: 'DELETE',
    path: '/bookings/:bookingId',
    handler: [
        secuCtrl.bearerAuth,
        mealCtrl.deleteBooking
    ]
});

router.route({
    method: 'POST',
    path: '/bookings/:bookingId/reviews',
    handler: [
        secuCtrl.bearerAuth,
        mealCtrl.postReview
    ]
});

router.route({
    method: 'GET',
    path: '/bookings/:bookingId/reviews',
    handler: mealCtrl.getReviews
});

router.route({
    method: 'GET',
    path: '/meals/:mealId/reviews',
    handler: mealCtrl.getMealReviews
});

router.route({
    method: 'GET',
    path: '/users/me/reviews',
    handler: [
        secuCtrl.bearerAuth,
        mealCtrl.getUserReviews
    ]
});

router.route({
    method: 'GET',
    path: '/users/:userId/reviews',
    handler: mealCtrl.getUserReviews
});

module.exports = router;