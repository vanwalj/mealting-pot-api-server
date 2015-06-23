/**
 * Created by Jordan on 21/06/2015.
 */
'use strict';

module.exports = function (sequelize, DataTypes) {
    const Review = sequelize.define('review', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            set: () => undefined
        },
        hospitalityRating: DataTypes.INTEGER,
        foodRating: DataTypes.INTEGER,
        comment: DataTypes.TEXT
    }, {
        classMethods: {
            associate: function (db) {
                Review.belongsTo(db.Booking);
                Review.belongsTo(db.User, { as: 'reviewer' });
                Review.belongsTo(db.User, { as: 'reviewee' });
            }
        }
    });

    return Review;
};