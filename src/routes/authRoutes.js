"use strict";

const express = require("express");
const router = express.Router();

router.route("/tokens").post((req, res) => {
  res.json({ message: "get a JWT" });
});

module.exports = router;
