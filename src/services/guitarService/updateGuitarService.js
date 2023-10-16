"use strict";

const guitarDAL = require("./../../database/guitarDAL");

const updateGuitarService = async (guitarData) => {
  return await guitarDAL.updateGuitar(guitarData);
};

module.exports = updateGuitarService;
