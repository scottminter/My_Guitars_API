"use strict";

const Joi = require("joi");

const schema = Joi.object({
  id: Joi.number().required(),
  brand: Joi.string().required(),
  model: Joi.string().required(),
});

module.exports = schema;
