/**
 * Created by Jordan on 6/4/2015.
 */
'use strict';

const hippie    = require('hippie');

const app           = require('../../');
const models        = require('../../models');
const createUser    = require('../lib/create-user');
const createToken   = require('../lib/create-token');

describe('Update', function () {

    beforeEach(function (done) {
        models.sequelize.sync({ force: true })
            .then(function () { done() });
    });

    it('send a too short password', function *(done) {
        let token = yield createToken();

        hippie(app)
            .put('/users')
            .json()
            .header('Authorization', 'Bearer ' + token)
            .send({
                password: 'cool'
            })
            .expectStatus(400)
            .end(done);
    });

    it('send a bad email', function *(done) {
        let token = yield createToken();

        hippie(app)
            .put('/users')
            .json()
            .header('Authorization', 'Bearer ' + token)
            .send({
                password: 'coolcool',
                email: 'yolo'
            })
            .expectStatus(400)
            .end(done);
    });

    it('send two time the same email', function *(done) {

        yield createUser({ email: 'yolo@gmail.com', password: 'password4242' });
        let user2   = yield createUser({ email: 'yolo2@gmail.com', password: 'password4242' });
        let token   = yield createToken(user2);

        hippie(app)
            .put('/users')
            .json()
            .header('Authorization', 'Bearer ' + token)
            .expectStatus(409)
            .send({
                email: 'yolo@gmail.com'
            })
            .end(done);

    });

    it('work', function *(done) {

        let token   = yield createToken();

        hippie(app)
            .put('/users')
            .json()
            .header('Authorization', 'Bearer ' + token)
            .expectStatus(200)
            .send({
                email: 'yolo-random@gmail.com',
                password: 'coucou4242'
            })
            .end(done);

    });

});