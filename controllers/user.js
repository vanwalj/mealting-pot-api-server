/**
 * Created by Jordan on 5/31/2015.
 */
'use strict';

const _ = require('underscore');

const models    = require('../models');

module.exports.register = function *register(next) {
    try {
        const user = yield models.User.create(this.request.body);

        this.status = 201;
        this.body   = user.get();

        yield next;
    } catch (e) {
        this.assert(e.name !== 'SequelizeValidationError', 400, e.message);
        this.assert(e.name !== 'SequelizeUniqueConstraintError', 409, e.message);
        throw e;
    }
};