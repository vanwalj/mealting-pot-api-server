/**
 * Created by Jordan on 19/06/2015.
 */
'use strict';

const hippie = require('hippie');

const createMeal = require('../lib/create-meal');

const models = require('../../models');
const app = require('../../');

describe('Get all meals', function () {
    beforeEach(function *(done) {
        yield models.sequelize.sync({force: true});
        done()
    });

    it('should work', function *(done) {
        hippie(app)
            .get('/meals')
            .expectStatus(204)
            .end(done);
    });

    it('should work', function *(done) {

        yield createMeal();

        hippie(app)
            .get('/meals')
            .expectStatus(200)
            .end(done);
    });

    it('should return a 404', function *(done) {
        hippie(app)
            .get('/meals/4242')
            .expectStatus(404)
            .end(done);
    });

    it('should work', function *(done) {
        let meal = yield createMeal();

        hippie(app)
            .get('/meals/' + meal.id)
            .expectStatus(200)
            .end(done);
    });

});