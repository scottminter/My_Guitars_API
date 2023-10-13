"use strict";

const express = require("express");
const { guitar } = require(".");
const router = express.Router();

router.route("/").get((req, res) => {
  res.json({ message: "Get all guitars" });
});

router.route("/:guitarId").get((req, res) => {
  const guitarId = req.params.guitarId;
  res.json({ message: `Get guitar by ID: ${guitarId}` });
});

router.route("/").post((req, res) => {
  res.json({ message: "Add a new guitar to the collection" });
});

router.route("/:guitarId").put((req, res) => {
  res.json({});
});

module.exports = router;
