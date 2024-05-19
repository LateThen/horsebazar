module.exports = (sequelize: any, Sequelize: any) => {
    return sequelize.define(
      "userstable",
      {
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
       
      },
      {
        timestamps: true,
      }
    );
  };
  