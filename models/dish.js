/**
 * Created by Jordan on 08/06/2015.
 */
'use strict';

module.exports = function (sequelize, DataTypes) {
    const Dish = sequelize.define('dish', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            set: () => undefined
        },
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        cuisine: DataTypes.STRING,
        type: DataTypes.STRING
    }, {
        classMethods: {
            associate: function (db) {
                Dish.belongsTo(db.Meal);
            }
        }
    });

    return Dish;
};