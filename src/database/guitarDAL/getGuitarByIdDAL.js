"use strict";

const mysqlConnection = require("./../connections").mysql;

const getGuitarByIdDAL = async (id) => {
  const conn = await mysqlConnection();

  return new Promise((resolve, reject) => {
    conn.execute(
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
      FROM guitars
      WHERE id = ?;`,
      [id],
      (err, results, fields) => {
        if (err) {
          reject(err);
        }

        resolve(results[0]);
      }
    );
  });
};

module.exports = getGuitarByIdDAL;
