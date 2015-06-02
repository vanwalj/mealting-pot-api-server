/**
 * Created by Jordan on 6/2/2015.
 */
'use strict';

const co    = require('co');

const createUser        = require('./create-user');
const jwtController     = require('../../controllers/jwt');

module.exports = function *createToken(user) {
    if (!user) user = yield createUser();

    let fn = co.wrap(jwtController.getToken);

    let ctx = { state: { user: user }};
    yield fn.call(ctx, function *() {});

    return {
        user: user,
        token: ctx.body.access_token
    };
};