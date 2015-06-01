/**
 * Created by Jordan on 5/31/2015.
 */
'use strict';

const hippie    = require('hippie');

const app       = require('../../');
const models    = require('../../models');

describe('Register', function () {

    beforeEach(function (done) {
        models.sequelize.sync({ force: true })
            .then(function () { done() });
    });

    it('send a too short password', function (done) {
        hippie(app)
            .post('/users')
            .json()
            .send({
                email: 'email@gmail.com',
                password: 'cool'
            })
            .expectStatus(400)
            .end(done);
    });

    it('send a bad email', function (done) {
        hippie(app)
            .post('/users')
            .json()
            .send({
                email: 'toto',
                password: 'dawdwada'
            })
            .expectStatus(400)
            .end(done)
    });

    it('send nothing', function (done) {
        hippie(app)
            .post('/users')
            .json()
            .send({})
            .expectStatus(400)
            .end(done)
    });

    it('send two time the same email', function (done) {
        const repeat = hippie(app)
            .post('/users')
            .json()
            .send({
                email: 'email@gmail.com',
                password: 'YOLO4242'
            });

        repeat.expectStatus(201)
            .end(function (err) {
                if (err) return done(err);
                repeat.expectStatus(401).end(done);
            })
    });

    it('create a new user', function (done) {
        hippie(app)
            .post('/users')
            .json()
            .send({
                email: 'email@gmail.com',
                password: 'YOLO4242'
            })
            .expectStatus(201)
            .end(done);
    });
});