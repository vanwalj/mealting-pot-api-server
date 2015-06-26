/**
 * Created by Jordan on 6/26/2015.
 */
'use strict';

const Router    = require('koa-joi-router');
const Joi       = require('joi');

const router    = Router();

const secCtrl   = require('../controllers/security');
const dishCtrl  = require('../controllers/dish');

/**
 * @api {get} /meals/:mealId/dishes Get Dishes for a Meal
 * @apiVersion 0.1.0
 * @apiName GetMealDishes
 * @apiGroup Dish
 *
 * @apiParam {String} mealId Unique meal id
 *
 * @apiSuccess (200) {String} id id of the Booking.
 * @apiSuccess (200) {String} name Name of the dish.
 * @apiSuccess (200) {String} description Description of the dish.
 * @apiSuccess (200) {String} cuisine Cuisine of the dish.
 * @apiSuccess (200) {String} type Type of the dish.
 * @apiSuccess (200) {String} mealId id of the related Meal.
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      [{
 *          "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "name": "Rice",
 *          "description": "White rice",
 *          "cuisine": "Chineese",
 *          "type": "Main",
 *          "mealId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "createdAt": "AAAA-MM-JJ HH:MM:SS"
 *      }, {
 *          "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "name": "Rice",
 *          "description": "White rice",
 *          "cuisine": "Chineese",
 *          "type": "Main",
 *          "mealId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "createdAt": "AAAA-MM-JJ HH:MM:SS"
 *      }]
 *
 */
router.route({
    method: 'GET',
    path: '/meals/:mealId/dishes',
    handler: dishCtrl.getDishes
});

/**
 * @api {post} /meals/:mealId/dishes Post a Dish for a Meal
 * @apiVersion 0.1.0
 * @apiName PostMealDish
 * @apiPermission loggedIn
 * @apiUse loggedIn
 * @apiGroup Dish
 *
 * @apiParam {String} mealId Unique meal id
 * @apiParam {String} name Dish name
 * @apiParam {String} description Dish description
 * @apiParam {String} cuisine Dish cuisine
 * @apiParam {String} type Dish type
 *
 * @apiParamExample {json} Request-Example:
 *      {
 *          "name": "Rice",
 *          "description": "White rice",
 *          "cuisine": "Chineese",
 *          "type": "Main",
 *      }
 *
 * @apiSuccess (201) {String} id id of the Booking.
 * @apiSuccess (201) {String} name Name of the dish.
 * @apiSuccess (201) {String} description Description of the dish.
 * @apiSuccess (201) {String} cuisine Cuisine of the dish.
 * @apiSuccess (201) {String} type Type of the dish.
 * @apiSuccess (201) {String} mealId id of the related Meal.
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 201 Created
 *      {
 *          "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "name": "Rice",
 *          "description": "White rice",
 *          "cuisine": "Chineese",
 *          "type": "Main",
 *          "mealId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "createdAt": "AAAA-MM-JJ HH:MM:SS"
 *      }
 *
 */
router.route({
    method: 'POST',
    path: '/meals/:mealId/dishes',
    validate: { type: 'json' },
    handler: [
        secCtrl.bearerAuth,
        dishCtrl.postDish
    ]
});

/**
 * @api {delete} /dishes/:dishId Delete a Dish
 * @apiVersion 0.1.0
 * @apiName DeleteDish
 * @apiPermission loggedIn
 * @apiUse loggedIn
 * @apiGroup Dish
 *
 * @apiParam {String} dishId Dish meal id
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 204 Empty
 *
 */
router.route({
    method: 'DELETE',
    path: '/dishes/:dishId',
    handler: [
        secCtrl.bearerAuth,
        dishCtrl.deleteDish
    ]
});

module.exports = router;