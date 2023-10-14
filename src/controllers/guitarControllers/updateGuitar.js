"use strict";

const schema = require("./../../validationSchemas/guitarSchemas/updateGuitarSchema");

const updateGuitar = async (guitarData) => {
  let isValid = {};

  return new Promise((resolve, reject) => {
    isValid = schema.validate(guitarData);

    if (isValid.error) {
      return reject({
        status: 400,
        message: isValid.error.details[0].message,
      });
    }

    return resolve({
      message: "Updated guitar",
      data: guitarData,
    });
  });
};

module.exports = updateGuitar;
