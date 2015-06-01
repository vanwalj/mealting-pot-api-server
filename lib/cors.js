/**
 * Created by Jordan on 6/1/2015.
 */
'use strict';

module.exports = function *cors(next) {
    yield next;

    this.response.header['Access-Control-Allow-Origin'] = '*';
    if (this.request.headers['access-control-request-headers'])
        this.response.header['Access-Control-Allow-Headers'] = this.request.headers['access-control-request-headers'];
};