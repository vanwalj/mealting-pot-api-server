/**
 * Created by Jordan on 5/31/2015.
 */
'use strict';

const _ = require('underscore');

const models    = require('../models');

module.exports.register = function *register(next) {
    const transaction = yield models.sequelize.transaction();

    try {
        const user = yield models.User.create(this.request.body, { transaction: transaction });

        transaction.commit();

        this.status = 201;
        this.body   = user.get();
        yield next;
    } catch (e) {
        transaction.rollback();
        this.assert(e.name !== 'SequelizeValidationError', 400, e.message);
        throw e;
    }
};