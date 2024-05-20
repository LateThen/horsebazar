"use strict";
module.exports = (sequelize, Sequelize) => {
    return sequelize.define("horsetable", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        phonenumber: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        location: {
            type: Sequelize.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        postname: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }, {
        timestamps: true,
    });
};
