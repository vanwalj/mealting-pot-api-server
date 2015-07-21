/**
 * Created by Jordan on 21/07/2015.
 */
'use strict';

const Router    = require('koa-joi-router');
const Joi       = require('joi');

const router    = Router();

const pictureCtrl  = require('../controllers/picture');

router.route({
    method: 'GET',
    path: '/pictures/:pictureId',
    handler: pictureCtrl.getPicture
});

module.exports = router;