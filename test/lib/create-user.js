/**
 * Created by Jordan on 6/2/2015.
 */
'use strict';

const _ = require('underscore');

const models            = require('../../models');
const userController    = require('../../controllers/user');
const controllerSC      = require('../lib/controller-short-circuit');

module.exports = function *createUser(opts) {
    opts = _.extend({
        email: 'john@doe.com',
        password: '___h4x0r',
        firstName: 'John',
        lastName: 'Doe'
    }, opts);

    let ctx = {
        request: {
            body: opts
        }
    };

    yield controllerSC(userController.register, ctx);

    return ctx.body;
};