/**
 * Created by Jordan on 6/26/2015.
 */
'use strict';

const redis     = require('redis');
if (process.env.REDIS_URL) {
    const redisUrl = require('redis-url');
    const opts = redisUrl.parse(process.env.REDIS_URL);
    console.log(opts);
    module.exports = redis.createClient(opts.port || 6379, opts.hostname || 'localhost');
    module.exports.auth(opts.auth, opts.password);
} else {
    module.exports = redis.createClient(process.env.REDIS_PORT || 6379, process.env.REDIS_HOST || 'localhost');
}
