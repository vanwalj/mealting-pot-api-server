/**
 * Created by Jordan on 6/2/2015.
 */
'use strict';
const Router    = require('koa-joi-router');
const Joi       = require('joi');

const securityController    = require('../controllers/security');
const jwtController         = require('../controllers/jwt');

const router    = Router();

/**
 * @api {get} /jwt Get a json web token
 * @apiVersion 0.1.0
 * @apiName GetJwt
 * @apiGroup Jwt
 * @apiPermission basicAuth
 * @apiUse basicAuth
 *
 * @apiSuccess (200) {String} access_token The requested token.
 * @apiSuccess (200) {String} jwks_uri The path to the public key url.
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *          "access_token": "eyJhbGciOiJFUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.82wXTCDa4VHEAaDlq7PyqOqNbMGwDiXSt_n1nKGH43w",
 *          "jwks_uri": "/jwt/public-key"
 *      }
 *
 */
router.route({
    method: 'GET',
    path: '/jwt',
    handler: [
        securityController.basicAuth,
        jwtController.getToken
    ]
});

/**
 * @api {get} /jwt/public-key Get the server jwt public key
 * @apiVersion 0.1.0
 * @apiName GetJwtPublicKey
 * @apiGroup Jwt
 *
 * @apiSuccess (200) {String} public_key The jwt public key.
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *          "public_key": "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCTgYKGKXovlDarIwYJVZjSFqYS"
 *      }
 *
 */
router.route({
    method: 'GET',
    path: '/jwt/public-key',
    handler: jwtController.getPublicKey
});

module.exports = router;