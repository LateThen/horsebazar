module.exports = (sequelize: any, Sequelize: any) => {
  return sequelize.define(
    "horsetable",
    {
      id: {
        type: Sequelize.INT,
      },
      name: {
        type: Sequelize.VARCHAR,
      },
      phonenumber: {
        type: Sequelize.INT,
      },
      location: {
        type: Sequelize.VARCHAR,
      },
      price: {
        type: Sequelize.INT,
      },
      description: {
        type: Sequelize.VARCHAR,
      },
      postname: {
        type: Sequelize.VARCHAR,
      },
    },
    {
      timestamps: true,
    }
  );
};
