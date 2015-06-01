/**
 * Created by Jordan on 6/1/2015.
 */
'use strict';

module.exports = function *cors(next) {
    this.set('Access-Control-Allow-Origin', '*');
    if (this.get('Access-Control-Request-Headers'))
        this.set('Access-Control-Allow-Headers', this.get('Access-Control-Request-Headers'));

    yield next;
};