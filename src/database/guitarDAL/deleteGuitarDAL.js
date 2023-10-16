"use strict";

const mysqlConnection = require("./../connections").mysql;

const deleteGuitarDAL = async (id) => {
  const conn = await mysqlConnection();
  try {
    const [results] = await conn.execute("DELETE FROM guitars WHERE (id = ?)", [
      id,
    ]);

    return {
      message: `Successfully deleted guitar ${id}`,
    };
  } catch (err) {
    throw err;
  }
};

module.exports = deleteGuitarDAL;
