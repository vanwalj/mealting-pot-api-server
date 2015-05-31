/**
 * Created by Jordan on 5/31/2015.
 */
'use strict';

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { isEmail: true }
        }
    }, {
        classMethods: {
            associate: function (models) {
                User.hasOne(models.EmailAuth, { onDelete: 'CASCADE' })
            }
        }
    });

    return User;
};