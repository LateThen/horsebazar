"use strict";
module.exports = (sequelize, Sequelize) => {
    return sequelize.define("table", {
        tableText: {
            type: Sequelize.STRING,
        },
    }, {
        timestamps: true,
    });
};
