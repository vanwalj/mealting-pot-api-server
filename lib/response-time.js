/**
 * Created by Jordan on 6/2/2015.
 */
'use strict';

module.exports = function *responseTime(next){
    const start = new Date;

    yield next;

    const ms = new Date - start;
    this.set('X-Response-Time', ms + 'ms');
};