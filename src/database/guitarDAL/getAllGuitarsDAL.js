"use strict";

const mysqlConnection = require("./../connections").mysql;

const getAllGuitarsDAL = async () => {
  const conn = await mysqlConnection();

  return new Promise((resolve, reject) => {
    conn.query(
      `SELECT 
        id,
        brand,
        model,
        year,
        color,
        current_string_guage,
        description,
        is_acoustic,
        is_electric
      FROM guitar_collection.guitars;`,
      (err, results, fields) => {
        if (err) {
          reject(err);
        }

        resolve(results);
      }
    );
  });
};

module.exports = getAllGuitarsDAL;
