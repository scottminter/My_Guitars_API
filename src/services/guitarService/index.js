"use strict";

const guitarService = {
  createNewGuitar: require("./createNewGuitarService"),
  deleteGuitar: require("./deleteGuitarService"),
  getAllGuitars: require("./getAllGuitarsService"),
  guitarGuitarById: require("./getGuitarByIdService"),
  updateGuitar: require("./updateGuitarService"),
};

module.exports = guitarService;
