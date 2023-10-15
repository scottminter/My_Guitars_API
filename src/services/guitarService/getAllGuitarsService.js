"use strict";

const guitarDAL = require("./../../database/guitarDAL");

const getAllGuitarsService = async () => {
  return await guitarDAL.getAllGuitars();
};

module.exports = getAllGuitarsService;
