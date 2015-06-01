/**
 * Created by Jordan on 5/31/2015.
 */
'use strict';

/**
 * @apiDefine loggedIn Client should auth via a bearer token.
 * @apiHeader (Auth) {String} Authorisation should contain the bearer token (see examples).
 * @apiHeaderExample {json} Header-Example:
 *      {
 *          "Authorisation": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
 *      }
 *
 * @apiError (401) Unauthorized Bearer authorization token is wrong or not set.
 * @apiError (403) Forbidden Insufficient permissions.
 */

module.exports = [
    require('./users').middleware()
];