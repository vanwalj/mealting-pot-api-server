/**
 * Created by Jordan on 20/07/2015.
 */
'use strict';

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
                return "https://" + process.env.S3_BUCKET + ".s3.amazonaws.com/" + this.id;
            }
        }
    });

    return Picture;
};