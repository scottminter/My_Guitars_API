"use strict";

const mysqlConnection = require("./../connections").mysql;

const getAllGuitarsDAL = async () => {
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
      FROM guitar_collection.guitars;`
    );

    return results;
  } catch (err) {
    throw err;
  }
};

module.exports = getAllGuitarsDAL;
