/**
 * Created by Jordan on 19/06/2015.
 */
'use strict';

const _ = require('underscore');

const models            = require('../models');
const mealsLocation     = require('../lib/meals-location');

module.exports.getMeals = function *getMeals(next) {

    let where = _.extend({}, this.params);

    if (this.query.latitude && this.query.longitude) {
        let mealsId = yield mealsLocation.nearbyAsync(this.query.latitude, this.query.longitude, this.query.radius || 5000);
        _.extend(where, { id: { '$in': mealsId } });
    }

    this.body = yield models.Meal.findAll({ where: where });

    yield next;
};

module.exports.getMeal = function *getMeal(next) {
    //todo report an issue @sequelize
    //this.body = yield models.Meal.findOne(this.params.mealId);

    try {
        this.body = yield models.Meal.findOne({ where: { id: this.params.mealId } });
    } catch (e) {
        this.assert(e.name !== 'SequelizeDatabaseError', 404);
        throw e;
    }
    yield next;
};

module.exports.postMeal = function *postMeal(next) {
    this.body   = yield models.Meal.create(_.extend({}, this.request.body, { userId: this.state.user.id }));
    this.status = 201;

    yield next;
};