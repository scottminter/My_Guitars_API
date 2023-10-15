"use strict";

const guitarService = require("./../../services").guitarService;
const schema = require("./../../validationSchemas/guitarSchemas/updateGuitarSchema");

const updateGuitar = async (guitarData) => {
  const isValid = schema.validate(guitarData);
  if (isValid.error) {
    return reject({
      status: 400,
      message: isValid.error.details[0].message,
    });
  }

  return await guitarService.updateGuitar(guitarData);
  // return resolve({
  //   message: "Updated guitar",
  //   data: guitarData,
  // });
};

module.exports = updateGuitar;
