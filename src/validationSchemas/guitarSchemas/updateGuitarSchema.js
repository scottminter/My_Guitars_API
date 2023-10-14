"use strict";

const Joi = require("joi");

const schema = Joi.object({
  brand: Joi.string().required(),
  model: Joi.string().required(),
});

module.exports = schema;
