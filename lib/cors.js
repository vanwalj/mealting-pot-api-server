/**
 * Created by Jordan on 6/1/2015.
 */
'use strict';

module.exports = function *cors(next) {
    yield next;

    this.response.header['access-control-allow-origin'] = '*';
    if (this.request.headers['access-control-request-headers'])
        this.response.header['access-control-allow-headers'] = this.request.headers['access-control-request-headers'];
};