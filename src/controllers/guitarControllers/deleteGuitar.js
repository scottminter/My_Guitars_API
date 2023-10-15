"use strict";

const guitarService = require("./../../services").guitarService;

const deleteGuitar = async (guitarId) => {
  return await guitarService.deleteGuitar(guitarId);
};

module.exports = deleteGuitar;
