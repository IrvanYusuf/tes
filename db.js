const { Sequelize } = require("sequelize");
const connection = new Sequelize(
  "bozrfw2miwisr2bnizcq",
  "upqvw0evryi1zmhl",
  "vtPYNyLJ2TXjXmVTjUJr",
  {
    host: "bozrfw2miwisr2bnizcq-mysql.services.clever-cloud.com",
    dialect: "mysql",
    port: 3306,
  }
);

module.exports = connection;
