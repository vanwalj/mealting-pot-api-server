/**
 * Created by Jordan on 19/06/2015.
 */
'use strict';

const hippie = require('hippie');

const createToken   = require('../lib/create-token');
const models        = require('../../models');
const app           = require('../../');

describe('Post a meal', function () {
    beforeEach(function *(done) {
        yield models.sequelize.sync({force: true});
        done()
    });

    it('should work', function *(done) {

        let token   = yield createToken();
        let date    = new Date();
        date.setTime(date.getTime() + 9999);

        hippie(app)
            .post('/meals')
            .header('Authorization', 'Bearer ' + token)
            .json()
            .send({
                title: 'Cool meal',
                location: {
                    latitude: 45.658987,
                    longitude: 75.588789
                },
                date: date,
                tags: ['coucou']
            })
            .expectStatus(201)
            .end(done);
    });

});