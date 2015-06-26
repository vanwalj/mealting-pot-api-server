/**
 * Created by Jordan on 6/26/2015.
 */
'use strict';

const Promise       = require('bluebird');
const redisClient   = require('./redis');
const proximity     = require('geo-proximity').initialize(redisClient);
module.exports      = Promise.promisifyAll(proximity.addSet('meals'));