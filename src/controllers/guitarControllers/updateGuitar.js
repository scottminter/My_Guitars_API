"use strict";

const guitarService = require("./../../services").guitarService;
const schema = require("./../../validationSchemas/guitarSchemas/updateGuitarSchema");

const updateGuitar = async (guitarData) => {
  let isValid = {};
  try {
    isValid = await schema.validateAsync(guitarData);
  } catch (err) {
    throw err;
  }

  return await guitarService.updateGuitar(isValid);
};

module.exports = updateGuitar;
