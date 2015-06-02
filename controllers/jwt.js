/**
 * Created by Jordan on 6/1/2015.
 */
'use strict';

const jwt       = require('jsonwebtoken');
const Promise   = require('bluebird');
const fs        = Promise.promisifyAll(require('fs'));

const formatKey = require('../lib/format-key');

const privateKey    = formatKey(process.env.JWT_SECRET);
const publicKey     = formatKey(process.env.JWT_PUBLIC);

module.exports.getPublicKey = function *getPublicKey(next) {
    this.status = 200;
    this.body   = {
        public_key: publicKey
    };

    yield next;
};

module.exports.getToken = function *getToken(next) {
    let jwtToken = jwt.sign({
        user: {
            id: this.state.user.id
        }
    }, privateKey, {
        algorithm: 'RS512',
        issuer: 'urn:mealting-pot-api-server:get-token'
    });

    this.status = 200;
    this.body   = {
        access_token: jwtToken,
        jwks_uri: '/jwt/public-key'
    };

    yield next;
};