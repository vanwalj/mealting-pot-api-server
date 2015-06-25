/**
 * Created by Jordan on 08/06/2015.
 */
'use strict';

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
            type: DataTypes.STRING,
            allowNull: false
        },
        format: DataTypes.STRING,
        cuisine: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        seats: DataTypes.INTEGER,
        tags: DataTypes.STRING
    }, {
        classMethods: {
            associate: function (db) {
                Meal.hasMany(db.Dish);
                Meal.belongsTo(db.User);
                Meal.hasMany(db.Booking);
            }
        }
    });

    return Meal;
};