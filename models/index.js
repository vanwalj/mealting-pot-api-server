/**
 * Created by Jordan on 5/31/2015.
 */
'use strict';

const Sequelize = require('sequelize');

const debugLog = require('../lib/debug-log');

const sequelize = new Sequelize(process.env.PG_URI, {
    logging: debugLog.sql
});

var db = {
    User: sequelize.import('./user'),
    Meal: sequelize.import('./meal'),
    Dish: sequelize.import('./dish'),
    Booking: sequelize.import('./booking'),
    Review: sequelize.import('./review'),
    Picture: sequelize.import('./picture')
};

Object.keys(db).forEach(function (modelName) {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});

module.exports = db;
module.exports.sequelize = sequelize;
module.exports.Sequelize = Sequelize;