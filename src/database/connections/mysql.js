"use static";

const mysql = require("mysql2/promise");

const mysqlConnection = async () => {
  return await mysql.createConnection({
    host: "",
    port: "",
    user: "",
    password: "",
    database: "",
    Promise: Promise,
  });
};

module.exports = mysqlConnection;
