"use strict";
module.exports = (sequelize, Sequelize) => {
    return sequelize.define("exercisecategoryrecords", {
        createdAt: {
            type: Sequelize.DATE,
        },
        updatedAt: {
            type: Sequelize.DATE,
        },
    }, {
        timestamps: true,
    });
};
