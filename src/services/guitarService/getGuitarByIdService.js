"use strict";

const guitarDAL = require("./../../database/guitarDAL");

const getGuitarByIdService = async (id) => {
  return await guitarDAL.guitarGuitarById(id);
  // return new Promise((resolve, reject) => {
  //   resolve({
  //     message: `Get guitar by ID: ${id} by guitar service`,
  //   });
  // });
};

module.exports = getGuitarByIdService;
