"use strict";
module.exports = (sequelize, Sequelize) => {
    return sequelize.define("useraccountroles", {
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
