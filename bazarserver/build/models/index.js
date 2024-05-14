"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../config/db");
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize(db_1.dbConfig.DB, db_1.dbConfig.USER, db_1.dbConfig.PASSWORD, {
    host: db_1.dbConfig.HOST,
    port: db_1.dbConfig.PORT,
    dialect: db_1.dbConfig.dialect,
    pool: {
        acquire: db_1.dbConfig.pool.acquire,
        idle: db_1.dbConfig.pool.idle,
        max: db_1.dbConfig.pool.max,
        min: db_1.dbConfig.pool.min,
    },
});
let db = {
    Sequelize: sequelize_1.Sequelize,
    sequelize,
    users: require("./user")(sequelize, sequelize_1.Sequelize),
    accountRoles: require("./accountroles")(sequelize, sequelize_1.Sequelize),
    userAccountRoles: require("./useraccountroles")(sequelize, sequelize_1.Sequelize),
    friendstable: require("./friends")(sequelize, sequelize_1.Sequelize),
    achievements: require("./achievements")(sequelize, sequelize_1.Sequelize),
    userAchievements: require("./userachievements")(sequelize, sequelize_1.Sequelize),
    tableStable: require("./table")(sequelize, sequelize_1.Sequelize),
    meals: require("./meals")(sequelize, sequelize_1.Sequelize),
    food: require("./food")(sequelize, sequelize_1.Sequelize),
    mealsfood: require("./mealsfood")(sequelize, sequelize_1.Sequelize),
    exercises: require("./exercises")(sequelize, sequelize_1.Sequelize),
    exercisecategory: require("./exercisecategory")(sequelize, sequelize_1.Sequelize),
    exercisecategoryrecords: require("./exercisecategoryrecords")(sequelize, sequelize_1.Sequelize),
    programs: require("./programs")(sequelize, sequelize_1.Sequelize),
    programExercises: require("./programExercises")(sequelize, sequelize_1.Sequelize),
};
db.users.belongsToMany(db.accountRoles, {
    through: db.userAccountRoles,
    as: "userRole",
});
db.users.belongsToMany(db.users, {
    through: db.friendstable,
    as: "friends",
});
db.users.belongsToMany(db.achievements, {
    through: db.userAchievements,
    as: "achievement",
});
db.users.belongsTo(db.tableStable, {
    onDelete: "cascade",
    as: "tables",
});
db.food.belongsToMany(db.meals, {
    through: db.mealsfood,
    as: "food",
});
db.exercises.belongsToMany(db.exercisecategory, {
    through: db.exercisecategoryrecords,
    as: "exercises",
});
db.exercises.belongsToMany(db.programs, {
    through: db.programExercises,
    as: "program",
});
exports.default = db;
