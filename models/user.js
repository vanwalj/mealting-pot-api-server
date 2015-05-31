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
            defaultValue: DataTypes.UUIDV4
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { isEmail: true }
        },
        _password: {
            type: DataTypes.STRING,
            allowNull: false,
            get: undefined,
            set: undefined
        },
        password: {
            type: DataTypes.VIRTUAL,
            get: undefined,
            set: function (v) {
                this.setDataValue('_password', bcrypt.hashSync(v, 12));
            }
        }
    }, {
        classMethods: {},
        instanceMethods: {
            comparePassword: function (password) {
                return bcrypt.compareAsync(this._password, password);
            }
        }
    });

    return User;
};