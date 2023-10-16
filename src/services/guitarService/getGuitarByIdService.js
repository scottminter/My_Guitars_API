"use strict";

const guitarDAL = require("./../../database/guitarDAL");

const getGuitarByIdService = async (id) => {
  return await guitarDAL.guitarGuitarById(id);
};

module.exports = getGuitarByIdService;
