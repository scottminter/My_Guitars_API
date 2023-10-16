"use strict";

const guitarService = require("./../../services").guitarService;
const newGuitarSchema = require("./../../validationSchemas/guitarSchemas/createGuitarSchema");

const createNewGuitar = async (guitarData) => {
  let isValid = {};
  try {
    isValid = await newGuitarSchema.validateAsync(guitarData);
  } catch (err) {
    throw err.details[0].message;
  }

  return await guitarService.createNewGuitar(isValid);
};

module.exports = createNewGuitar;
