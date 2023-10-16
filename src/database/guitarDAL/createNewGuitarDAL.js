"use strict";

const mysqlConnection = require("./../connections").mysql;

const createNewGuitarDAL = async (guitarData) => {
  const conn = await mysqlConnection();
  try {
    const [results] = await conn.execute(
      "INSERT INTO guitars (brand, model, year, color, current_string_guage, description, is_acoustic, is_electric, estimated_value) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        guitarData.brand,
        guitarData.model,
        guitarData.year,
        guitarData.color,
        guitarData.current_string_guage,
        guitarData.description,
        guitarData.is_acoustic,
        guitarData.is_electric,
        guitarData.estimated_value,
      ]
    );

    return {
      id: results.insertId,
      message: "Guitar successfully inserted",
    };
  } catch (err) {
    throw err;
  }
};

module.exports = createNewGuitarDAL;
