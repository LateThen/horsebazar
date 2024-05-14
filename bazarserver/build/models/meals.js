"use strict";
module.exports = (sequelize, Sequelize) => {
    return sequelize.define("meals", {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING,
        },
    }, {
        timestamps: true,
    });
};
