/**
 * Created by Jordan on 5/31/2015.
 */
'use strict';

const Router    = require('koa-joi-router');
const Joi       = require('joi');

const userController    = require('../controllers/user');

const router    = Router();

/**
 * @api {get} /users/:id Get a user by id
 * @apiVersion 0.1.0
 * @apiName GetUser
 * @apiGroup User
 * @apiPermission loggedIn
 * @apiUse loggedIn
 *
 * @apiParam {String} id User unique id.
 *
 * @apiSuccess (200) {String} id id of the User.
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *          "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c"
 *      }
 *
 * @apiError (404) NotFound User with the requested id not found.
 */
router.route({
    method: 'GET',
    path: '/users/:userId',
    validate: {
        header: {
            Authorisation: Joi.string().regex(/Bearer \w*/).required()
        },
        params: {
            userId: Joi.string().guid().required()
        }
    },
    handler: userController.getUser
});

/**
 * @api {post} /users Register a new user
 * @apiVersion 0.1.0
 * @apiName PostUser
 * @apiGroup User
 *
 * @apiParam {String} email User email, must be a valid email or will throw a 400.
 * @apiParam {String{6..}} password User password, must be at least 6 character long.
 *
 * @apiParamExample {json} Request-Example:
 *      {
 *          "email": "john@doe.com",
 *          "password": "really secured"
 *      }
 *
 * @apiSuccess (201) {String} id id of the User.
 * @apiSuccess (201) {String} email Email of the User.
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 201 Created
 *      {
 *          "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "email": "john@doe.com"
 *      }
 *
 * @apiError (400) BadRequest Client error, more details within the response body.
 * @apiError (409) Conflict Email already registered.
 */
router.route({
    method: 'POST',
    path: '/users',
    validate: {
        type: 'json',
        body: {
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required()
        }
    },
    handler: userController.register
});

module.exports = router;