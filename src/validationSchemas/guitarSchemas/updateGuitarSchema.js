"use strict";

const Joi = require("joi");

const schema = Joi.object({
  id: Joi.number().required(),
  brand: Joi.string().required(),
  model: Joi.string().required(),
  year: Joi.number().required(),
  color: Joi.string().required(),
  current_string_guage: Joi.number().allow(null),
  description: Joi.string().required(),
  is_acoustic: Joi.bool().required(),
  is_electric: Joi.bool().required(),
  estimated_value: Joi.number().required(),
});

module.exports = schema;
