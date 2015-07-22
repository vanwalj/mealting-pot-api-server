/**
 * Created by Jordan on 19/06/2015.
 */
'use strict';

const _ = require('underscore');

const models            = require('../models');
const mealsLocation     = require('../lib/meals-location');
const awsLib            = require('../lib/aws');

module.exports.getMeals = function *getMeals(next) {

    let where = _.extend({}, this.params);

    if (this.query.latitude && this.query.longitude) {
        let mealsId = yield mealsLocation.nearbyAsync(this.query.latitude, this.query.longitude, this.query.radius || 5000);
        _.extend(where, { id: { '$in': mealsId } });
    }

    this.body = yield models.Meal.findAll({ where: where, include: this.query.include, attributes: this.query.attributes || ['id'] });

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

module.exports.getMealPictures = function *getMealPictures(next) {
    var meal = yield models.Meal.findOne({ where: { id: this.params.mealId } });
    this.assert(meal, 404);

    this.body = yield meal.getPictures({ attributes: this.query.attributes || ['id'] });

    yield next;
};

module.exports.postMeal = function *postMeal(next) {
    this.body   = yield models.Meal.create(_.extend({}, this.request.body, { userId: this.state.user.id }));
    this.status = 201;

    yield next;
};

module.exports.postMealPicture = function *postMealPicture(next) {
    var meal = yield models.Meal.findOne({ where: { id: this.params.mealId } });
    this.assert(meal.userId === this.state.user.id, 401);

    var picture = yield models.Picture.create(this.request.body);
    yield meal.addPicture(picture);
    var aws = yield awsLib.signPutObject({ name: picture.id, type: this.request.body.type });

    this.status = 201;
    this.body = {
        picture: picture,
        aws: aws
    };

    yield next;
};