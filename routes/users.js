/**
 * Created by Jordan on 5/31/2015.
 */
'use strict';

const Router    = require('koa-joi-router');
const Joi       = require('joi');

const userController        = require('../controllers/user');
const securityController    = require('../controllers/security');

const router    = Router();

/**
 * @api {get} /users/me Get self
 * @apiVersion 0.1.0
 * @apiName GetUser
 * @apiGroup User
 * @apiPermission loggedIn
 * @apiUse loggedIn
 *
 * @apiParam {String} id User unique id.
 *
 * @apiSuccess (200) {String} id id of the User.
 * @apiSuccess (200) {String} firstName User first name.
 * @apiSuccess (200) {String} lastName User last name.
 * @apiSuccess (200) {String} email User email.
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *          "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "firstName": "Marc"
 *          "firstName": "Dutroux"
 *          "email": "marc.dutroux@gmail.com"
 *      }
 *
 * @apiError (404) NotFound User with the requested id not found.
 */
router.route({
    method: 'GET',
    path: '/users/me',
    handler: [
        securityController.bearerAuth,
        userController.getMe
    ]
});

/**
 * @api {get} /users/:userId Get a user by id
 * @apiVersion 0.1.0
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {String} userId User unique id.
 *
 * @apiSuccess (200) {String} id id of the User.
 * @apiSuccess (200) {String} firstName User first name.
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *          "id": "2676a6fd-a734-4639-a5cb-1f78e03fae2c",
 *          "firstName": "Marc"
 *      }
 *
 * @apiError (404) NotFound User with the requested id not found.
 */
router.route({
    method: 'GET',
    path: '/users/:userId',
    validate: {
        params: {
            userId: Joi.string().guid().required()
        }
    },
    handler: [
        userController.getUser
    ]
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
            password: Joi.string().min(6).required(),
            firstName: Joi.string().required(),
            lastName: Joi.string().required()
        }
    },
    handler: userController.register
});

/**
 * @api {put} /users/me Edit user
 * @apiVersion 0.1.0
 * @apiName PutUser
 * @apiGroup User
 * @apiPermission loggedIn
 * @apiUse loggedIn
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
 * @apiSuccess (200) {String} id id of the User.
 * @apiSuccess (200) {String} email Email of the User.
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
    method: 'PUT',
    path: '/users/me',
    validate: {
        type: 'json',
        body: {
            email: Joi.string().email(),
            password: Joi.string().min(6),
            firstName: Joi.string(),
            lastName: Joi.string()
        }
    },
    handler: [
        securityController.bearerAuth,
        userController.update
    ]
});

router.route({
    method: 'POST',
    path: '/users/me/picture',
    validate: {
        type: 'json'
    },
    handler: [
        securityController.bearerAuth,
        userController.postUserPicture
    ]
});

/**
 * @api {delete} /users/me Delete user account
 * @apiVersion 0.1.0
 * @apiName DeleteUser
 * @apiGroup User
 * @apiPermission loggedIn
 * @apiUse loggedIn
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 204 Empty Response
 *
 */
router.route({
    method: 'DELETE',
    path: '/users/me',
    handler: [
        securityController.bearerAuth,
        userController.destroy
    ]
});

module.exports = router;