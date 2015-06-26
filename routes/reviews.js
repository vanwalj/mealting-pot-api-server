/**
 * Created by Jordan on 6/26/2015.
 */
'use strict';

const Router    = require('koa-joi-router');
const Joi       = require('joi');

const router    = Router();

const secCtrl       = require('../controllers/security');
const reviewCtrl    = require('../controllers/review');

/**
 * @api {post} /bookings/:bookingId/reviews Post a review for a booking
 * @apiVersion 0.1.0
 * @apiName PostReview
 * @apiGroup Review
 * @apiPermission loggedIn
 * @apiUse loggedIn
 *
 * @apiParam {String} bookingId Booking unique id.
 * @apiParam {String} comment Review comment.
 * @apiParam {Number} hospitalityRating Review hospitality rating from 0 to 10.
 * @apiParam {Number} foodRating Review food rating from 0 to 10.
 *
 * @apiParamExample {json} Request-Example:
 *      {
 *          "comment": "Was so cool, would go again",
 *          "hospitalityRating": 5,
 *          "foodRating": 7
 *      }
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 201 Created
 *      {
 *          "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "comment": "Was so cool, would go again",
 *          "hospitalityRating": 5,
 *          "foodRating": 7
 *          "bookingId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "reviewerId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "revieweeId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "createdAt": "AAAA-MM-JJ HH:MM:SS"
 *      }
 *
 */
router.route({
    method: 'POST',
    path: '/bookings/:bookingId/reviews',
    handler: [
        secCtrl.bearerAuth,
        reviewCtrl.postReview
    ]
});

/**
 * @api {get} /meals/:mealId/reviews Get reviews for a meal
 * @apiVersion 0.1.0
 * @apiName GetReviews
 * @apiGroup Review
 *
 * @apiParam {String} mealId Meal unique id.
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      [{
 *          "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "comment": "Was so cool, would go again",
 *          "hospitalityRating": 5,
 *          "foodRating": 7
 *          "bookingId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "reviewerId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "revieweeId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "createdAt": "AAAA-MM-JJ HH:MM:SS"
 *      }, {
 *          "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "comment": "Was so cool, would go again",
 *          "hospitalityRating": 5,
 *          "foodRating": 7
 *          "bookingId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "reviewerId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "revieweeId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "createdAt": "AAAA-MM-JJ HH:MM:SS"
 *      }, {
 *          "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "comment": "Was so cool, would go again",
 *          "hospitalityRating": 5,
 *          "foodRating": 7
 *          "bookingId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "reviewerId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "revieweeId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "createdAt": "AAAA-MM-JJ HH:MM:SS"
 *      }]
 *
 */

router.route({
    method: 'GET',
    path: '/meals/:mealId/reviews',
    handler: reviewCtrl.getMealReviews
});

/**
 * @api {get} /users/me/reviews Get self reviews
 * @apiVersion 0.1.0
 * @apiName GetSelfReviews
 * @apiGroup Review
 * @apiPermission loggedIn
 * @apiUse loggedIn
 *
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *          asReviewer: [{
 *              "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "comment": "Was so cool, would go again",
 *              "hospitalityRating": 5,
 *              "foodRating": 7
 *              "bookingId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "reviewerId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "revieweeId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "createdAt": "AAAA-MM-JJ HH:MM:SS"
 *          }, {
 *              "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "comment": "Was so cool, would go again",
 *              "hospitalityRating": 5,
 *              "foodRating": 7
 *              "bookingId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "reviewerId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "revieweeId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "createdAt": "AAAA-MM-JJ HH:MM:SS"
 *          }, {
 *              "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "comment": "Was so cool, would go again",
 *              "hospitalityRating": 5,
 *              "foodRating": 7
 *              "bookingId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "reviewerId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "revieweeId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "createdAt": "AAAA-MM-JJ HH:MM:SS"
 *          }],
 *          asReviewee: [{
 *              "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "comment": "Was so cool, would go again",
 *              "hospitalityRating": 5,
 *              "foodRating": 7
 *              "bookingId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "reviewerId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "revieweeId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "createdAt": "AAAA-MM-JJ HH:MM:SS"
 *          }, {
 *              "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "comment": "Was so cool, would go again",
 *              "hospitalityRating": 5,
 *              "foodRating": 7
 *              "bookingId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "reviewerId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "revieweeId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "createdAt": "AAAA-MM-JJ HH:MM:SS"
 *          }, {
 *              "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "comment": "Was so cool, would go again",
 *              "hospitalityRating": 5,
 *              "foodRating": 7
 *              "bookingId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "reviewerId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "revieweeId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "createdAt": "AAAA-MM-JJ HH:MM:SS"
 *          }]
 *      }
 *
 */
router.route({
    method: 'GET',
    path: '/users/me/reviews',
    handler: [
        secCtrl.bearerAuth,
        reviewCtrl.getUserReviews
    ]
});

/**
 * @api {get} /users/:userId/reviews Get self reviews
 * @apiVersion 0.1.0
 * @apiName GetSelfReviews
 * @apiGroup Review
 *
 * @apiParam {String} userId User unique id.
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *          asReviewer: [{
 *              "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "comment": "Was so cool, would go again",
 *              "hospitalityRating": 5,
 *              "foodRating": 7
 *              "bookingId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "reviewerId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "revieweeId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "createdAt": "AAAA-MM-JJ HH:MM:SS"
 *          }, {
 *              "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "comment": "Was so cool, would go again",
 *              "hospitalityRating": 5,
 *              "foodRating": 7
 *              "bookingId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "reviewerId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "revieweeId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "createdAt": "AAAA-MM-JJ HH:MM:SS"
 *          }, {
 *              "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "comment": "Was so cool, would go again",
 *              "hospitalityRating": 5,
 *              "foodRating": 7
 *              "bookingId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "reviewerId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "revieweeId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "createdAt": "AAAA-MM-JJ HH:MM:SS"
 *          }],
 *          asReviewee: [{
 *              "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "comment": "Was so cool, would go again",
 *              "hospitalityRating": 5,
 *              "foodRating": 7
 *              "bookingId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "reviewerId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "revieweeId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "createdAt": "AAAA-MM-JJ HH:MM:SS"
 *          }, {
 *              "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "comment": "Was so cool, would go again",
 *              "hospitalityRating": 5,
 *              "foodRating": 7
 *              "bookingId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "reviewerId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "revieweeId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "createdAt": "AAAA-MM-JJ HH:MM:SS"
 *          }, {
 *              "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "comment": "Was so cool, would go again",
 *              "hospitalityRating": 5,
 *              "foodRating": 7
 *              "bookingId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "reviewerId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "revieweeId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *              "createdAt": "AAAA-MM-JJ HH:MM:SS"
 *          }]
 *      }
 *
 */
router.route({
    method: 'GET',
    path: '/users/:userId/reviews',
    handler: reviewCtrl.getUserReviews
});

module.exports = router;