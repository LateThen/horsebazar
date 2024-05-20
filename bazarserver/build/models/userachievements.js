"use strict";
module.exports = (sequelize, Sequelize) => {
    return sequelize.define("userachievements", {
        achievements: {
            type: Sequelize.UUID,
        },
        users: {
            type: Sequelize.UUID,
        },
    }, {
        timestamps: true,
    });
};
