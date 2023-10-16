"use strict";

const guitarDAL = {
  getAllGuitars: require("./getAllGuitarsDAL"),
  guitarGuitarById: require("./getGuitarByIdDAL"),
  createNewGuitar: require("./createNewGuitarDAL"),
  updateGuitar: require("./updateGuitarDAL"),
  deleteGuitar: require("./deleteGuitarDAL"),
};

module.exports = guitarDAL;
