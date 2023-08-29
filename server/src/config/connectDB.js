const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("phong_tro_123", "root", null, {
  host: "localhost",
  dialect: "mysql",
});

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.log("Unable to connect to the database:", error);
  }
};

export default connectDB;