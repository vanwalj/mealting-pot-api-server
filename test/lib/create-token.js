/**
 * Created by Jordan on 6/2/2015.
 */
'use strict';

const co    = require('co');

const createUser        = require('./create-user');
const jwtController     = require('../../controllers/jwt');
const controllerSC      = require('../lib/controller-short-circuit');

module.exports = function *createToken(user) {
    if (!user) user = yield createUser();

    let ctx = { state: { user: user }};
    yield controllerSC(jwtController.getToken, ctx);

    return ctx.body.access_token;
};