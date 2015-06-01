/**
 * Created by Jordan on 6/1/2015.
 */
'use strict';

module.exports = function *cors(next) {
    yield next;

    this.set('Access-Control-Allow-Origin', '*');
    if (this.get('access-control-request-headers'))
        this.set('Access-Control-Allow-Headers', this.get('access-control-request-headers'));
};