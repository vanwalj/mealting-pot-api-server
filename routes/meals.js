/**
 * Created by Jordan on 19/06/2015.
 */
'use strict';

const Router    = require('koa-joi-router');
const Joi       = require('joi');

const router    = Router();

const secCtrl   = require('../controllers/security');
const mealCtrl  = require('../controllers/meal');

/**
 * @api {get} /meals Get meals
 * @apiVersion 0.1.0
 * @apiName GetMeals
 * @apiGroup Meal
 *
 * @apiParam {Number} [latitude] Search position.
 * @apiParam {Number} [longitude] Search position.
 * @apiParam {Number} [radius] Search radius.
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      [{
 *          "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c"
 *          "title": "Cool chinese breakfast",
 *          "description": "I will cook some cool chinese breakfast !!!",
 *          "location": {
 *              "latitude": 42.5,
 *              "longitude": 47.5
 *          },
 *          "format": "Breakfast",
 *          "cuisine": "Continental chinese",
 *          "price": 12.5,
 *          "date": "AAAA-MM-JJ HH:MM:SS",
 *          "seats": 7,
 *          "tags": ["cool", "chinese", "hot", "salad", "waffle"],
 *          "userId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c"
 *      }, {
 *          "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c"
 *          "title": "Cool chinese breakfast",
 *          "description": "I will cook some cool chinese breakfast !!!",
 *          "location": {
 *              "latitude": 42.5,
 *              "longitude": 47.5
 *          },
 *          "format": "Breakfast",
 *          "cuisine": "Continental chinese",
 *          "price": 12.5,
 *          "date": "AAAA-MM-JJ HH:MM:SS",
 *          "seats": 7,
 *          "tags": ["cool", "chinese", "hot", "salad", "waffle"],
 *          "userId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c"
 *      }, {
 *          "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c"
 *          "title": "Cool chinese breakfast",
 *          "description": "I will cook some cool chinese breakfast !!!",
 *          "location": {
 *              "latitude": 42.5,
 *              "longitude": 47.5
 *          },
 *          "format": "Breakfast",
 *          "cuisine": "Continental chinese",
 *          "price": 12.5,
 *          "date": "AAAA-MM-JJ HH:MM:SS",
 *          "seats": 7,
 *          "tags": ["cool", "chinese", "hot", "salad", "waffle"],
 *          "userId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c"
 *      }]
 *
 */

router.route({
    method: 'GET',
    path: '/meals',
    handler: mealCtrl.getMeals
});

/**
 * @api {get} /users/:userId/meals Get meals for User
 * @apiVersion 0.1.0
 * @apiName GetUserMeals
 * @apiGroup Meal
 *
 * @apiParam {String} userId User id.
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      [{
 *          "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c"
 *          "title": "Cool chinese breakfast",
 *          "description": "I will cook some cool chinese breakfast !!!",
 *          "location": {
 *              "latitude": 42.5,
 *              "longitude": 47.5
 *          },
 *          "format": "Breakfast",
 *          "cuisine": "Continental chinese",
 *          "price": 12.5,
 *          "date": "AAAA-MM-JJ HH:MM:SS",
 *          "seats": 7,
 *          "tags": ["cool", "chinese", "hot", "salad", "waffle"],
 *          "dishes": [
 *              {
 *                  "type": "main",
 *                  "name": "Nouilles",
 *                  "description": "Des nouilles, ok."
 *              }
 *          ],
 *          "userId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c"
 *      }, {
 *          "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c"
 *          "title": "Cool chinese breakfast",
 *          "description": "I will cook some cool chinese breakfast !!!",
 *          "location": {
 *              "latitude": 42.5,
 *              "longitude": 47.5
 *          },
 *          "format": "Breakfast",
 *          "cuisine": "Continental chinese",
 *          "price": 12.5,
 *          "date": "AAAA-MM-JJ HH:MM:SS",
 *          "seats": 7,
 *          "tags": ["cool", "chinese", "hot", "salad", "waffle"],
 *          "dishes": [
 *              {
 *                  "type": "main",
 *                  "name": "Nouilles",
 *                  "description": "Des nouilles, ok."
 *              }
 *          ],
 *          "userId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c"
 *      }, {
 *          "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c"
 *          "title": "Cool chinese breakfast",
 *          "description": "I will cook some cool chinese breakfast !!!",
 *          "location": {
 *              "latitude": 42.5,
 *              "longitude": 47.5
 *          },
 *          "format": "Breakfast",
 *          "cuisine": "Continental chinese",
 *          "price": 12.5,
 *          "date": "AAAA-MM-JJ HH:MM:SS",
 *          "seats": 7,
 *          "tags": ["cool", "chinese", "hot", "salad", "waffle"],
 *          "userId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c"
 *      }]
 *
 */

router.route({
    method: 'GET',
    path: '/users/:userId/meals',
    handler: mealCtrl.getMeals
});

/**
 * @api {get} /meals/:mealId Get meals by id
 * @apiVersion 0.1.0
 * @apiName GetMeal
 * @apiGroup Meal
 *
 * @apiParam {String} mealId Meal id.
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *          "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c"
 *          "title": "Cool chinese breakfast",
 *          "description": "I will cook some cool chinese breakfast !!!",
 *          "location": {
 *              "latitude": 42.5,
 *              "longitude": 47.5
 *          },
 *          "format": "Breakfast",
 *          "cuisine": "Continental chinese",
 *          "price": 12.5,
 *          "date": "AAAA-MM-JJ HH:MM:SS",
 *          "seats": 7,
 *          "tags": ["cool", "chinese", "hot", "salad", "waffle"],
 *          "dishes": [
 *              {
 *                  "type": "main",
 *                  "name": "Nouilles",
 *                  "description": "Des nouilles, ok."
 *              }
 *          ],
 *          "userId": "2676a6fd-a734-4639-a5cb-1f78e03fae2c"
 *      }
 *
 */

router.route({
    method: 'GET',
    path: '/meals/:mealId',
    handler: mealCtrl.getMeal
});

/**
 * @api {post} /meals/:mealId/pictures Post a picture for a meal
 * @apiVersion 0.1.0
 * @apiName PostMealPicture
 * @apiGroup Meal
 *
 * @apiParam {String} mealId Meal id.
 * @apiParam {String} name File name.
 * @apiParam {String} type File type (img/jpg for example)
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *          picture: {
 *              "id": "blabla",
 *              "name": "picture",
 *              "url": "https://aws.s3.downloadurl.com/blabla"
 *          },
 *          aws: {
 *              signed_request: "https://aws.s3.uploadurl.com/blabla"
 *          }
 *      }
 *
 */

router.route({
    method: 'POST',
    path: '/meals/:mealId/pictures',
    validate: {
        type: 'json',
        body: {
            name: Joi.string(),
            type: Joi.string().required()
        }
    },
    handler: [
        secCtrl.bearerAuth,
        mealCtrl.postMealPicture
    ]
});

/**
 * @api {get} /meals/:mealId/pictures Get pictures for a meal
 * @apiVersion 0.1.0
 * @apiName PostMealPicture
 * @apiGroup Meal
 *
 * @apiParam {String} mealId Meal id.
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *          [{
 *              id: "blabla",
 *              "name": "picture",
 *              "url": "https://aws.s3.downloadurl.com/blabla"
 *          },{
 *              id: "blabla",
 *              "name": "picture",
 *              "url": "https://aws.s3.downloadurl.com/blabla"
 *          },{
 *              id: "blabla",
 *              "name": "picture",
 *              "url": "https://aws.s3.downloadurl.com/blabla"
 *          }]
 *      }
 *
 */

router.route({
    method: 'GET',
    path: '/meals/:mealId/pictures',
    handler: mealCtrl.getMealPictures
});

/**
 * @api {post} /meals Post a meal
 * @apiVersion 0.1.0
 * @apiName PostMeal
 * @apiGroup Meal
 * @apiPermission loggedIn
 * @apiUse loggedIn
 *
 * @apiParam {String} title Meal title.
 * @apiParam {String} [description] Meal description.
 * @apiParam {Object} location Meal location.
 * @apiParam {Number} location.latitude location latitude.
 * @apiParam {Number} location.longitude location longitude.
 * @apiParam {String} [format] Meal format.
 * @apiParam {String} [cuisine] Meal cuisine.
 * @apiParam {Number} [price] Meal price.
 * @apiParam {String} date Meal date.
 * @apiParam {Number} seats Meal number of seats.
 * @apiParam {String[]} tags Meal tags array.
 * @apiParam {Object[]} dishes An array of dishes
 * @apiParam {String} dishes[].type Dish type
 * @apiParam {String} dishes[].name Dish name
 * @apiParam {String} dishes[].description Dish description
 *
 * @apiParamExample {json} Request-Example:
 *      {
 *          "title": "Cool chinese breakfast",
 *          "description": "I will cook some cool chinese breakfast !!!",
 *          "location": {
 *              "latitude": 42.5,
 *              "longitude": 47.5
 *          },
 *          "format": "Breakfast",
 *          "cuisine": "Continental chinese",
 *          "price": 12.5,
 *          "date": "AAAA-MM-JJ HH:MM:SS",
 *          "seats": 7,
 *          "tags": ["cool", "chinese", "hot", "salad", "waffle"]
 *          "dishes": [
 *              {
 *                  "type": "main",
 *                  "name": "Nouilles",
 *                  "description": "Des nouilles, ok."
 *              }
 *          ]
 *      }
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 201 Created
 *      {
 *          "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c"
 *          "title": "Cool chinese breakfast",
 *          "description": "I will cook some cool chinese breakfast !!!",
 *          "location": {
 *              "latitude": 42.5,
 *              "longitude": 47.5
 *          },
 *          "format": "Breakfast",
 *          "cuisine": "Continental chinese",
 *          "price": 12.5,
 *          "date": "AAAA-MM-JJ HH:MM:SS",
 *          "seats": 7,
 *          "tags": ["cool", "chinese", "hot", "salad", "waffle"],
 *          "dishes": [
 *              {
 *                  "type": "main",
 *                  "name": "Nouilles",
 *                  "description": "Des nouilles, ok."
 *              }
 *          ]
 *      }
 *
 */
router.route({
    method: 'POST',
    path: '/meals',
    validate: {
        type: 'json',
        body: {
            title: Joi.string().required(),
            description: Joi.string(),
            location: Joi.object().keys({
                latitude: Joi.number().precision(6).min(-90).max(90).required(),
                longitude: Joi.number().precision(6).min(-180).max(180).required()
            }).required(),
            format: Joi.string(),
            cuisine: Joi.string(),
            price: Joi.number(),
            date: Joi.date().min('now').required(),
            seats: Joi.number().min(1),
            tags: Joi.array().items(Joi.string()),
            dishes: Joi.array().items(Joi.object().keys({
                type: Joi.string(),
                name: Joi.string(),
                description: Joi.string()
            }))
        }
    },
    handler: [
        secCtrl.bearerAuth,
        mealCtrl.postMeal
    ]
});

module.exports = router;