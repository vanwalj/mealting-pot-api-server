/**
 * Created by Jordan on 19/06/2015.
 */
'use strict';

const _ = require('underscore');

const models            = require('../../models');
const createUser        = require('./create-user');
const mealCtrl          = require('../../controllers/meal');
const controllerSC      = require('../lib/controller-short-circuit');

module.exports = function *createMeal(opts, user) {
    opts = opts || {
            title: 'Cool meal',
            description: 'Really cool meal',
            location: 'yolo',
            format: 'dinner',
            cuisine: 'french',
            price: 10,
            date: Date(),
            seats: 4,
            tags: 'yolo cool french'
        };

    if (!user) {
        user = yield createUser();
    }

    let ctx = {
        state: {
            user: user
        },
        request: {
            body: opts
        }
    };

    try {
        yield controllerSC(mealCtrl.postMeal, ctx);
    } catch (e) {
        console.error(e.message);
    }

    return ctx.body;
};