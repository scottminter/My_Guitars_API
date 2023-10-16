"use strict";

const guitarDAL = {
  getAllGuitars: require("./getAllGuitarsDAL"),
  guitarGuitarById: require("./getGuitarByIdDAL"),
  createNewGuitar: require("./createNewGuitarDAL"),
  updateGuitar: require("./updateGuitarDAL"),
};

module.exports = guitarDAL;
