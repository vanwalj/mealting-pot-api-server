/**
 * Created by Jordan on 5/31/2015.
 */
'use strict';

module.exports = function *errCatcher(next) {
    try {
        yield next;
    } catch (e) {
        this.body = {};
        if (e.statusCode) {
            this.status         = e.statusCode;
            this.body[e.name]   = e.message;
        } else {
            console.error(e);
            this.status = 500;
            this.body   = { InternalServerError: ":'(" };
        }
    }
};