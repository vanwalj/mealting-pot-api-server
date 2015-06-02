/**
 * Created by Jordan on 5/31/2015.
 */
'use strict';

const Promise   = require('bluebird');
const bcrypt    = Promise.promisifyAll(require('bcrypt'));

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            set: () => undefined
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: { isEmail: true }
        },
        password: {
            type: DataTypes.STRING,
            get: () => undefined,
            set: function (v) {
                this.setDataValue('password', bcrypt.hashSync(v, 12));
            }
        }
    }, {
        classMethods: {},
        instanceMethods: {
            comparePassword: function (password) {
                return bcrypt.compareAsync(password, this.getDataValue('password'));
            }
        }
    });

    return User;
};