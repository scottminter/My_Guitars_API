"use strict";

const guitarService = require("./../../services").guitarService;

const getAllGuitars = async () => {
  return await guitarService.getAllGuitars();
};

module.exports = getAllGuitars;
