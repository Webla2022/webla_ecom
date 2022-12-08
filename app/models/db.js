const mysql = require("mysql2");
const dbConfig = require("../config/db.config.js");

var connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  database: dbConfig.DB,
  password: dbConfig.PASSWORD,
  port:dbConfig.PORT
});

module.exports = connection;
