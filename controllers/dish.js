/**
 * Created by Jordan on 6/26/2015.
 */
'use strict';

const _ = require('underscore');

const models            = require('../models');

module.exports.getDishes = function *getDishes(next) {
    this.body = yield models.Dish.findAll({ where: this.params });

    yield next;
};

module.exports.postDish = function *postDish(next) {
    let hasMeal = yield this.state.user.hasMeal(this.params.mealId);
    this.assert(hasMeal, 404, "No such meal");

    this.body   = yield models.Dish.create(_.extend({}, this.request.body, { mealId: this.params.mealId }));
    this.state  = 201;

    yield next;
};

module.exports.deleteDish = function *deleteDish(next) {

    let transaction = yield models.sequelize.transaction();

    let dish = yield models.Dish.findOne({ where: { id: this.params.dishId }}, { transaction: transaction });
    this.assert(dish, 404);

    let meal = yield dish.getMeal({ transaction: transaction });
    this.assert(meal && meal.userId === this.state.user.id, 409);

    yield dish.destroy({ transaction: transaction });

    transaction.commit();

    yield next;
};