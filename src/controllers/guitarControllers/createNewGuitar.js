"use strict";

const guitarService = require("./../../services").guitarService;
const newGuitarSchema = require("./../../validationSchemas/guitarSchemas/createGuitarSchema");

const createNewGuitar = async (guitarData) => {
  const isValid = newGuitarSchema.validate(guitarData);
  if (isValid.error) {
    return reject({
      status: 400,
      message: isValid.error.details[0].message,
    });
  }

  return await guitarService.createNewGuitar(isValid.value);
};

module.exports = createNewGuitar;
