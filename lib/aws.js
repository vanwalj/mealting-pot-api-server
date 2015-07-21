/**
 * Created by Jordan on 21/07/2015.
 */
'use strict';

const aws       = require('aws-sdk');
const Promise   = require('bluebird');

module.exports = {};

module.exports.signGetObject = function signGetObject(object) {

    aws.config.update({
        accessKeyId: process.env.AWS_KEY,
        secretAccessKey: process.env.AWS_SECRET,
        endpoint: process.env.S3_ENDPOINT,
        sslEnabled: process.env.S3_SSL_ENABLED,
        s3ForcePathStyle: process.env.S3_FORCE_PATH_STYLE
    });

    var s3 = new aws.S3();
    var S3Params = {
        Bucket: process.env.S3_BUCKET,
        Key: object.name,
        Expires: 60
    };

    return s3.getSignedUrl('getObject', S3Params);
};

module.exports.signPutObject = function signPutObject(object) {

    aws.config.update({
        accessKeyId: process.env.AWS_KEY,
        secretAccessKey: process.env.AWS_SECRET,
        endpoint: process.env.S3_ENDPOINT,
        sslEnabled: process.env.S3_SSL_ENABLED,
        s3ForcePathStyle: process.env.S3_FORCE_PATH_STYLE
    });

    var s3 = new aws.S3();
    var S3Params = {
        Bucket: process.env.S3_BUCKET,
        Key: object.name,
        Expires: 60,
        ContentType: object.type
    };

    return new Promise(function (resolve, reject) {
        s3.getSignedUrl('putObject', S3Params, function(err, data){
            if (err) {
                reject(err);
            } else {
                resolve({
                    signed_request: data
                });
            }
        });
    });
};