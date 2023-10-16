"use static";

const mysql = require("mysql2/promise");
const configs = require("dotenv").config().parsed;

const mysqlConnection = async () => {
  return await mysql.createConnection({
    host: configs.DB_HOST,
    port: configs.DB_PORT,
    user: configs.DB_USER,
    password: configs.DB_PW,
    database: configs.DB_SCHEMA,
    Promise: Promise,
  });
};

module.exports = mysqlConnection;
