/**
 * Created by Jordan on 6/1/2015.
 */
'use strict';

const Promise   = require('bluebird');
const jwt       = Promise.promisifyAll(require('jsonwebtoken'));

const models    = require('../models');
const formatKey = require('../lib/format-key');

const publicKey    = formatKey(process.env.JWT_PUBLIC);

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

module.exports.bearerAuth = function *bearerAuth(next) {
    this.assert(this.get('Authorization'), 401, 'Authorization header not set');

    let rMatch = /Bearer (\S*)/.exec(this.get('Authorization'));
    this.assert(rMatch, 401, 'Authorization header wrong format');

    try {
        this.state.jwt = yield jwt.verifyAsync(rMatch[1], publicKey, {
            algorithms: ['RS384'],
            issuer: 'urn:mealting-pot-api-server:get-token'
        });
    } catch (e) {
        this.throw(401, e)
    }

    let user = models.User.findOne({ where: { id: this.state.jwt.user.id } });
    this.assert(user, 401, 'Corrupted bearer token');

    this.state.user = user;

    yield next;

};