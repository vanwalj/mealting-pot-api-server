/**
 * Created by Jordan on 08/06/2015.
 */
'use strict';

const mealsLocation = require('../lib/meals-location');

module.exports = function (sequelize, DataTypes) {
    const Meal = sequelize.define('meal', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            set: () => undefined
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        description: DataTypes.TEXT,
        location: {
            type: DataTypes.JSONB,
            allowNull: false,
            validate: {
                isLocation: function isLocation(val) {
                    if (!val || !val.latitude || !val.longitude ||
                        val.latitude > 90.0 || val.latitude < -90.0 ||
                        val.longitude > 180.0 || val.longitude < -180.0)
                        throw new Error('Location wrong format');
                },
                set: function (val) {
                    mealsLocation.updateLocation(val.latitude, val.longitude, this.id);
                    this.setDataValue('location', val);
                }
            }
        },
        format: DataTypes.STRING,
        cuisine: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        seats: DataTypes.INTEGER,
        tags: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: []
        }
    }, {
        classMethods: {
            associate: function (db) {
                Meal.hasMany(db.Dish);
                Meal.belongsTo(db.User);
                Meal.hasMany(db.Booking);
                Meal.hasMany(db.Picture);
            }
        }
    });

    return Meal;
};