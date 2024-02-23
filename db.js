const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "localhost",
  database: "undangan_management",
  password: "",
  user: "root",
});

module.exports = connection;
