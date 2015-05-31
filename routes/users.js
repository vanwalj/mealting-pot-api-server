/**
 * Created by Jordan on 5/31/2015.
 */
'use strict';

const Router    = require('koa-joi-router');
const Joi       = require('joi');

const userController    = require('../controllers/user');

const router    = Router();

router.route({
    method: 'POST',
    path: '/users/register',
    validate: {
        type: 'json',
        body: {
            email: Joi.string().email(),
            password: Joi.string().min(6)
        }
    },
    handler: userController.register
});

module.exports = router;