/**
 * Created by Jordan on 08/06/2015.
 */
'use strict';

module.exports = function (sequelize, DataTypes) {
    const Booking = sequelize.define('booking', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            set: () => undefined
        },
        seats: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function (db) {
                Booking.belongsTo(db.User);
                Booking.belongsTo(db.Meal);
            }
        }
    });

    return Booking;
};