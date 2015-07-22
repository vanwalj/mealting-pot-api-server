/**
 * Created by Jordan on 21/07/2015.
 */
'use strict';

const models    = require('../models');

module.exports.getPicture = function *getPicture(next) {
    let picture = yield models.Picture.findOne({ where: { id: this.params.pictureId }, attributes: this.request.query.attributes });
    this.assert(picture, 404, "No such picture");

    this.body = picture;

    yield next;
};