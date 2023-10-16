"use strict";

const mysqlConnection = require("./../connections").mysql;

const getGuitarByIdDAL = async (id) => {
  const conn = await mysqlConnection();
  try {
    const [results] = await conn.execute(
      `SELECT
        id,
        brand,
        model,
        year,
        color,
        current_string_guage,
        description,
        is_acoustic,
        is_electric,
        estimated_value
      FROM guitars
      WHERE id = ?;`,
      [id]
    );

    return results.length > 0 ? results[0] : {};
  } catch (err) {
    throw err;
  }
};

module.exports = getGuitarByIdDAL;
