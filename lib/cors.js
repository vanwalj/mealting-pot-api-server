/**
 * Created by Jordan on 6/1/2015.
 */
'use strict';

module.exports = function *cors(next) {
    this.set('Access-Control-Allow-Origin', 'http://localhost:8888');
    this.set('Access-Control-Allow-Credentials', 'true');
    if (this.get('Access-Control-Request-Headers'))
        this.set('Access-Control-Allow-Headers', this.get('Access-Control-Request-Headers'));

    if (this.method === 'OPTIONS') return this.status = 204;

    yield next;
};