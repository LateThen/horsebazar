"use strict";
module.exports = (sequelize, Sequelize) => {
    return sequelize.define("userstable", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.STRING,
        },
    }, {
        timestamps: true,
    });
};
