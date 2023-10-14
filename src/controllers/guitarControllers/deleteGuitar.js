"use strict";

const deleteGuitar = async (guitarId) => {
  return new Promise((resolve, reject) => {
    resolve({
      message: `Delete guitar by ID: ${guitarId}`,
    });
  });
};

module.exports = deleteGuitar;
