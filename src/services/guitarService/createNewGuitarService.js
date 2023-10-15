"use strict";

const createNewGuitarService = async (guitarData) => {
  return new Promise((resolve, reject) => {
    resolve({
      message: "Create a new guitar by guitar service",
      data: guitarData,
    });
  });
};

module.exports = createNewGuitarService;
