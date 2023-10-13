"use strict";

const newGuitarSchema = require("./../../validationSchemas/guitarSchemas/createGuitarSchema");

const createNewGuitar = async (guitarData) => {
  let isValid = {};
  return new Promise((resolve, reject) => {
    isValid = newGuitarSchema.validate(guitarData);
    console.log(isValid);
    if (isValid.error) {
      return reject({
        status: 400,
        message: isValid.error.details[0].message,
      });
    }
    return resolve({
      message: "Create new guitar",
      data: isValid.value,
    });
  });
};

module.exports = createNewGuitar;
