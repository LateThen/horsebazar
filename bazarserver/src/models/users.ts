module.exports = (sequelize: any, Sequelize: any) => {
    return sequelize.define(
      "userstable",
      {
        id: {
          type: Sequelize.INT,
        },
        email: {
          type: Sequelize.VARCHAR,
        },
        password: {
            type: Sequelize.VARCHAR,
        },
       
      },
      {
        timestamps: true,
      }
    );
  };
  