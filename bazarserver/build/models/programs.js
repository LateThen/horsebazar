"use strict";
module.exports = (sequelize, Sequelize) => {
    return sequelize.define("programs", {
        programName: {
            type: Sequelize.STRING,
        },
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
