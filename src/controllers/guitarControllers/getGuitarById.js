"use strict";

const guitarService = require("./../../services").guitarService;

const getGuitarById = async (guitarId) => {
  return await guitarService.guitarGuitarById(guitarId);
};

module.exports = getGuitarById;
