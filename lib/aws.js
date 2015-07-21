/**
 * Created by Jordan on 21/07/2015.
 */
'use strict';

const aws       = require('aws-sdk');
const Promise   = require('bluebird');

module.exports = {};

module.exports.signFile = function signFile(file) {

    aws.config.update({accessKeyId: process.env.AWS_KEY, secretAccessKey: process.env.AWS_SECRET});

    var s3 = new aws.S3();
    var S3Params = {
        Bucket: process.env.S3_BUCKET,
        Key: file.name,
        Expires: 60,
        ContentType: file.type,
        ACL: 'public-read'
    };

    return new Promise(function (resolve, reject) {
        s3.getSignedUrl('putObject', S3Params, function(err, data){
            if (err) {
                reject(err);
            } else {
                resolve({
                    signed_request: data,
                    url: 'https://' + process.env.S3_BUCKET + '.s3.amazonaws.com/' + file.name
                });
            }
        });
    });
};