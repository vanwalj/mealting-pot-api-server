/**
 * Created by Jordan on 5/31/2015.
 */
'use strict';

const _ = require('underscore');

const models    = require('../models');
const awsLib    = require('../lib/aws');

module.exports.register = function *register(next) {
    try {
        const user = yield models.User.create(this.request.body);

        this.status = 201;
        this.body   = user.get();

        yield next;
    } catch (e) {
        this.assert(e.name !== 'SequelizeValidationError', 400, e.message);
        this.assert(e.name !== 'SequelizeUniqueConstraintError', 409, e.message);
        throw e;
    }
};

module.exports.getMe = function *getMe(next) {

    this.body = this.state.user.get();

    yield next;
};

module.exports.getUser = function *getUser(next) {

    let include = [];
    if (this.query.include && this.query.include["picture"]) {
        include.push(models.Picture)
    }

    let user = yield models.User.findOne({
        where: { id: this.params.userId },
        attributes: ['id', 'firstName']
    });

    this.assert(user, 404, 'User not found');

    this.body = user.get();

    yield next;
};

module.exports.update = function *update(next) {

    if (this.request.body.email === this.state.user.email) {
        delete this.request.body.email;
    }

    try {
        yield this.state.user.update(this.request.body);
    } catch (e) {
        this.assert(e.name !== 'SequelizeValidationError', 400, e.message);
        this.assert(e.name !== 'SequelizeUniqueConstraintError', 409, e.message);
        throw e;
    }

    this.body   = this.state.user;

    yield next;
};

module.exports.postUserPicture = function *postUserPicture(next) {
    var picture = yield models.Picture.create(this.request.body);
    yield this.state.user.setPicture(picture);
    var aws = yield awsLib.signPutObject({ name: picture.id, type: this.request.body.type });

    this.status = 201;
    this.body = {
        picture: picture,
        aws: aws
    };

    yield next;
};

module.exports.destroy = function *destroy(next) {
    yield this.state.user.destroy();

    this.status = 204;

    yield next;
};