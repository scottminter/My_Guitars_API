"use strict";

const deleteGuitarService = async (id) => {
  return new Promise((resolve, reject) => {
    resolve({
      message: `Delete guitar with ID: ${id} by guitar service`,
    });
  });
};

module.exports = deleteGuitarService;
