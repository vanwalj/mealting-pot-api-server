/**
 * Created by Jordan on 6/2/2015.
 */
'use strict';

const _ = require('underscore');

const models    = require('../../models');

module.exports = function createUser(opts) {
    return models.User.create(_.extend({
        email: 'john@doe.com',
        password: '___h4x0r'
    }, opts));
};