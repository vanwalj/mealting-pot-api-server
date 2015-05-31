/**
 * Created by Jordan on 5/31/2015.
 */
'use strict';

const hippie    = require('hippie');

const app   = require('../../');

describe('Register', function () {
    it('create a new user', function (done) {
        hippie(app)
            .post('/users/register')
            .json()
            .send({
                email: 'j.vanwall@gmail.com',
                password: 'YOLO4242'
            })
            .expectStatus(201)
            .end(done)
    });
});