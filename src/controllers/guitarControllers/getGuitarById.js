"use strict";

const getGuitarById = async (guitarId) => {
  return new Promise((resolve, reject) => {
    resolve({
      message: "Get guitar by ID",
    });
  });
};

module.exports = getGuitarById;
