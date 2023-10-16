"use strict";

const mysqlConnection = require("./../connections").mysql;

const updateGuitarDAL = async (guitarData) => {
  const conn = await mysqlConnection();
  try {
    const [results] = await conn.execute(
      `UPDATE guitars SET brand = ?, model = ?, year = ?, color = ?, current_string_guage = ?, description = ?, is_acoustic = ?, is_electric = ?, estimated_value = ?, updated_at = NOW() WHERE (id = ?)`,
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
        guitarData.id,
      ]
    );

    return {
      id: guitarData.id,
      message: "Successfully updated guitar",
    };
  } catch (err) {
    throw err;
  }
};

module.exports = updateGuitarDAL;
