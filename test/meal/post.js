/**
 * Created by Jordan on 19/06/2015.
 */
'use strict';

const hippie = require('hippie');

const models = require('../../models');
const app = require('../../');

describe('Post a meal', function () {
    beforeEach(function *(done) {
        yield models.sequelize.sync({force: true});
        done()
    });

    it('should work', function *(done) {
        hippie(app)
            .post('/meals')
            .json()
            .data({
                title: 'Ez pz',
                description: 'Yolo',
                location: '80 zetrei',
                format: 'Dinner',
                cuisine: 'Turk',
                price: 10.99,
                date: 'today',
                seats: 1,
                tags: 'Ez Pz Lmn Sqz'
            })
            .expectStatus(201)
            .end(done);
    });

});