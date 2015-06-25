/**
 * Created by Jordan on 5/31/2015.
 */
'use strict';

const debugLog = require('./debug-log');

module.exports = function *httpLogger(next) {

    debugLog.http('Incoming connection');


    yield next;

    debugLog.http({
        request: this.request,
        response: this.response
    });
};