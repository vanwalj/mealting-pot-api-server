/**
 * Created by Jordan on 6/2/2015.
 */
'use strict';

const hippie    = require('hippie');

const app           = require('../../');
const models        = require('../../models');
const createUser    = require('../lib/create-user');

describe('Get a jwt token', function () {
    beforeEach(function (done) {
        models.sequelize.sync({ force: true })
            .then(function () { done() });
    });

    it('send no authorization header', function (done) {
        hippie(app)
            .json()
            .get('/jwt')
            .expectStatus(401)
            .end(done);
    });
    
    it('send a bad authorization header', function (done) {
        hippie(app)
            .json()
            .get('/jwt')
            .header('Authorization', 'Nop')
            .expectStatus(401)
            .end(done);
    });

    it('request a non existing user', function (done) {
        hippie(app)
            .json()
            .get('/jwt')
            .auth('john@doe.com', 'nop')
            .expectStatus(401)
            .end(done);
    });

    it('send a bad password', function (done) {
        hippie(app)
            .json()
            .get('/jwt')
            .auth('john@doe.com', 'nop')
            .expectStatus(401)
            .end(done);
    });

    it('work', function *(done) {
        yield createUser({ email: 'john@doe.com', password: 'Coucou42' });
        hippie(app)
            .json()
            .get('/jwt')
            .auth('john@doe.com', 'Coucou42')
            .expectStatus(200)
            .end(done);
    });

});