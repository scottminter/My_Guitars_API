"use strict";

const guitarDAL = require("./../../database/guitarDAL");

const deleteGuitarService = async (id) => {
  return await guitarDAL.deleteGuitar(id);
};

module.exports = deleteGuitarService;
