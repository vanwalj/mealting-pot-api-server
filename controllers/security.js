/**
 * Created by Jordan on 6/1/2015.
 */
'use strict';

const models = require('../models');

module.exports.basicAuth = function *basicAuth(next) {
    this.assert(this.get('Authorization'), 401, 'Authorization header not set');

    let rMatch = /Basic (\S*)/.exec(this.get('Authorization'));
    this.assert(rMatch, 401, 'Authorization header wrong format');

    let aMatch = /(.*):(.*)/.exec(new Buffer(rMatch[1], 'base64').toString());
    this.assert(aMatch, 401, 'Authorization token wrong format');

    let user = yield models.User.findOne({ where: { email: aMatch[1] } });
    this.assert(user, 401, 'Email does not exist');

    let auth = yield user.comparePassword(aMatch[2]);
    this.assert(auth, 401, 'Wrong password');

    this.state.user = user;

    yield next;
};