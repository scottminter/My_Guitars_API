"use static";

const mysql = require("mysql2");

const mysqlConnection = async () => {
  return new Promise((resolve, reject) => {
    try {
      const connection = mysql.createConnection({
        host: "scott-mysql-8-3.c4h5bam9pvtm.us-east-1.rds.amazonaws.com",
        port: "3306",
        user: "guitaradmin",
        password: "z8G$zMSt7H?@RS9i",
        database: "guitar_collection",
      });

      resolve(connection);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = mysqlConnection;
