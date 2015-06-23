/**
 * Created by Jordan on 6/2/2015.
 */
'use strict';

const hippie    = require('hippie');

const app           = require('../../');
const models        = require('../../models');
const createUser    = require('../lib/create-user');
const createToken   = require('../lib/create-token');

describe('Get a user by id', function () {

    beforeEach(function (done) {
        models.sequelize.sync({force: true})
            .then(function () {
                done()
            });
    });

    it('send no authorization header', function *(done) {

        let user = yield createUser();

        hippie(app)
            .get('/users/' + user.id)
            .json()
            .expectStatus(401)
            .end(done);
    });

    it('request a non existing user', function *(done) {

        let token = yield createToken();

        hippie(app)
            .get('/users/3F2504E0-4F89-11D3-9A0C-0305E82C3301')
            .json()
            .expectStatus(404)
            .header('Authorization', 'Bearer ' + token)
            .end(done);
    });

    it('work', function *(done) {

        let user    = yield createUser();
        let token   = yield createToken(user);

        hippie(app)
            .get('/users/' + user.id)
            .json()
            .expectStatus(200)
            .header('Authorization', 'Bearer ' + token)
            .end(done);
    });

});