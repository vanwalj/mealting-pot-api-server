/**
 * Created by Jordan on 5/31/2015.
 */
'use strict';

const koa   = require('koa');

const httpLogger    = require('./lib/http-logger');
const errCatcher    = require('./lib/err-catcher');
const cors          = require('./lib/cors');
const routes        = require('./routes');

const app   = koa();

app.use(httpLogger);
app.use(errCatcher);
app.use(cors);

routes.forEach((route) => app.use(route));

module.exports = app;