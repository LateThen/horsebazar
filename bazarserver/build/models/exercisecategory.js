"use strict";
module.exports = (sequelize, Sequelize) => {
    return sequelize.define("exercisecategory", {
        name: {
            type: Sequelize.STRING,
        },
    }, {
        timestamps: true,
    });
};
