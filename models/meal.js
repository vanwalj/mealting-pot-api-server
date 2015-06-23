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
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        location: DataTypes.STRING,
        format: DataTypes.STRING,
        cuisine: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        date: DataTypes.STRING,
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