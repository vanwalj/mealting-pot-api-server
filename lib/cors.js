/**
 * Created by Jordan on 6/1/2015.
 */
'use strict';

module.exports = function *cors(next) {
    this.response.headers['access-control-allow-origin'] = '*';
    this.response.headers['access-control-allow-headers'] = 'Origin, X-Requested-With, Content-Type, Accept';

    yield next;
};