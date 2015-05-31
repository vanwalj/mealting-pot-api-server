/**
 * Created by Jordan on 5/31/2015.
 */
'use strict';

const koa   = require('koa');

const httpLogger    = require('./lib/http-logger');
const routes        = require('./routes');

const app   = koa();

app.use(httpLogger);

routes.forEach(function (route) {
    app.use(route);
});

module.exports = app;