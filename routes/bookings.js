/**
 * Created by Jordan on 6/26/2015.
 */
'use strict';

const Router    = require('koa-joi-router');
const Joi       = require('joi');

const router    = Router();

const secCtrl       = require('../controllers/security');
const bookingCtrl   = require('../controllers/booking');

/**
 * @api {get} /users/me/bookings Get self bookings
 * @apiVersion 0.1.0
 * @apiName GetSelfBookings
 * @apiPermission loggedIn
 * @apiUse loggedIn
 * @apiGroup Booking
 *
 * @apiSuccess (200) {String} id id of the Booking.
 * @apiSuccess (200) {Number} seats Number of reserved seats for this booking.
 * @apiSuccess (200) {String} mealId id of the related Meal.
 * @apiSuccess (200) {String} userId id of the User who booked for this meal.
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      [{
 *          "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "seats": 2,
 *          "mealId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "userId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "createdAt": "AAAA-MM-JJ HH:MM:SS"
 *      }, {
 *          "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "seats": 2,
 *          "mealId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "userId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "createdAt": "AAAA-MM-JJ HH:MM:SS"
 *      }]
 *
 */
router.route({
    method: 'GET',
    path: '/users/me/bookings',
    handler: [
        secCtrl.bearerAuth,
        bookingCtrl.getUserBookings
    ]
});

/**
 * @api {get} /users/:userId/bookings Get user bookings
 * @apiVersion 0.1.0
 * @apiName GetUserBookings
 * @apiGroup Booking
 *
 *
 * @apiParam {String} userId User unique id.
 *
 * @apiSuccess (200) {String} id id of the Booking.
 * @apiSuccess (200) {Number} seats Number of reserved seats for this booking.
 * @apiSuccess (200) {String} mealId id of the related Meal.
 * @apiSuccess (200) {String} userId id of the User who booked for this meal.
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      [{
 *          "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "seats": 2,
 *          "mealId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "userId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "createdAt": "AAAA-MM-JJ HH:MM:SS"
 *      }, {
 *          "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "seats": 2,
 *          "mealId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "userId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "createdAt": "AAAA-MM-JJ HH:MM:SS"
 *      }]
 *
 */
router.route({
    method: 'GET',
    path: '/users/:userId/bookings',
    handler: bookingCtrl.getUserBookings
});


/**
 * @api {post} /meals/:mealId/bookings Book a meal
 * @apiVersion 0.1.0
 * @apiName Book
 * @apiPermission loggedIn
 * @apiUse loggedIn
 * @apiGroup Booking
 *
 * @apiParam {String} mealId Meal unique id.
 * @apiParam {Number} seats requested seats.
 *
 * @apiSuccess (200) {String} id id of the Booking.
 * @apiSuccess (200) {Number} seats Number of reserved seats for this booking.
 * @apiSuccess (200) {String} mealId id of the related Meal.
 * @apiSuccess (200) {String} userId id of the User who booked for this meal.
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 201 Created
 *      {
 *          "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "seats": 2,
 *          "mealId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "userId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "createdAt": "AAAA-MM-JJ HH:MM:SS"
 *      }
 *
 */
router.route({
    method: 'POST',
    path: '/meals/:mealId/bookings',
    validate: { type: 'json' },
    handler: [
        secCtrl.bearerAuth,
        bookingCtrl.book
    ]
});

/**
 * @api {get} /meals/:mealId/bookings Get bookings for a meal
 * @apiVersion 0.1.0
 * @apiName GetMealBookings
 * @apiGroup Booking
 *
 *
 * @apiParam {String} mealId Meal unique id.
 *
 * @apiSuccess (200) {String} id id of the Booking.
 * @apiSuccess (200) {Number} seats Number of reserved seats for this booking.
 * @apiSuccess (200) {String} mealId id of the related Meal.
 * @apiSuccess (200) {String} userId id of the User who booked for this meal.
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      [{
 *          "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "seats": 2,
 *          "mealId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "userId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "createdAt": "AAAA-MM-JJ HH:MM:SS"
 *      }, {
 *          "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "seats": 2,
 *          "mealId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "userId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "createdAt": "AAAA-MM-JJ HH:MM:SS"
 *      }]
 *
 */
router.route({
    method: 'GET',
    path: '/meals/:mealId/bookings',
    handler: bookingCtrl.getBookings
});

/**
 * @api {get} /bookings/:bookingId Get booking
 * @apiVersion 0.1.0
 * @apiName GetBooking
 * @apiGroup Booking
 *
 *
 * @apiParam {String} bookingId Booking unique id.
 *
 * @apiSuccess (200) {String} id id of the Booking.
 * @apiSuccess (200) {Number} seats Number of reserved seats for this booking.
 * @apiSuccess (200) {String} mealId id of the related Meal.
 * @apiSuccess (200) {String} userId id of the User who booked for this meal.
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *          "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "seats": 2,
 *          "mealId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "userId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "createdAt": "AAAA-MM-JJ HH:MM:SS"
 *      }
 *
 */
router.route({
    method: 'GET',
    path: '/bookings/:bookingId',
    handler: bookingCtrl.getBooking
});

/**
 * @api {delete} /bookings/:bookingId Cancel a booking
 * @apiVersion 0.1.0
 * @apiName DeleteBooking
 * @apiPermission loggedIn
 * @apiUse loggedIn
 * @apiGroup Booking
 *
 * @apiParam {String} bookingId Booking unique id.
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 204 Empty Response
 *
 */
router.route({
    method: 'DELETE',
    path: '/bookings/:bookingId',
    handler: [
        secCtrl.bearerAuth,
        bookingCtrl.deleteBooking
    ]
});

module.exports = router;