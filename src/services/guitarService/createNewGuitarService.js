"use strict";

const guitarDAL = require("./../../database/guitarDAL");

const createNewGuitarService = async (guitarData) => {
  return await guitarDAL.createNewGuitar(guitarData);
};

module.exports = createNewGuitarService;
