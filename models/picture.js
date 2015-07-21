/**
 * Created by Jordan on 20/07/2015.
 */
'use strict';

var awsLib = require('../lib/aws');

module.exports = function (sequelize, DataTypes) {
    const Picture = sequelize.define('picture', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            set: () => undefined
        },
        name: DataTypes.STRING,
        type: DataTypes.STRING,
        url: {
            type: DataTypes.VIRTUAL,
            get: function () {
                return awsLib.signGetObject({ name: this.id });
            }
        }
    });

    return Picture;
};