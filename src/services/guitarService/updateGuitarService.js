"use strict";

const updateGuitarService = async (guitarData) => {
  return new Promise((resolve, reject) => {
    resolve({
      message: "Update guitar by guitar service",
      data: guitarData,
    });
  });
};

module.exports = updateGuitarService;
