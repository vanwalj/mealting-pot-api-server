/**
 * Created by Jordan on 04/06/2015.
 */
'use strict';

const test  = require('../../controllers/jwt');
const co    = require('co');

module.exports = function *controllerShortCircuit(controller, ctx, next) {
    ctx = ctx || {};
    next = next || function *(){};

    let fn = co.wrap(controller);
    yield fn.call(ctx, next);

    return ctx;
};