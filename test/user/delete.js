/**
 * Created by Jordan on 08/06/2015.
 */
'use strict';

const hippie    = require('hippie');

const app           = require('../../');
const models        = require('../../models');
const createUser    = require('../lib/create-user');
const createToken   = require('../lib/create-token');

describe('Delete', function () {

    beforeEach(function (done) {
        models.sequelize.sync({force: true})
            .then(function () {
                done()
            });
    });

    it('work', function *(done) {
        let token = yield createToken();

        hippie(app)
            .del('/users')
            .header('Authorization', 'Bearer ' + token)
            .expectStatus(204)
            .end(done);
    });


});