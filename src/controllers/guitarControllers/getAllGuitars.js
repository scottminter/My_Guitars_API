"use strict";

const getAllGuitars = async () => {
  return new Promise((resolve, reject) => {
    resolve({
      message: "Get all guitars",
    });
  });
};

module.exports = getAllGuitars;
