/**
 * Created by Jordan on 6/1/2015.
 */
'use strict';

const jwt       = require('jsonwebtoken');
const Promise   = require('bluebird');
const fs        = Promise.promisifyAll(require('fs'));

const formatKey = require('../lib/format-key');

module.exports.getPublicKey = function *getPublicKey(next) {
    this.status = 200;
    this.body   = {
        public_key: formatKey(process.env.JWT_PUBLIC)
    };

    yield next;
};

module.exports.getToken = function *getToken(next) {
    let jwtToken = jwt.sign({
        user: {
            id: this.state.user.id
        }
    }, formatKey(process.env.JWT_SECRET), {
        algorithm: 'RS384',
        issuer: 'urn:mealting-pot-api-server:get-token'
    });

    this.status = 200;
    this.body   = {
        access_token: jwtToken,
        jwks_uri: '/jwt/public-key'
    };

    yield next;
};