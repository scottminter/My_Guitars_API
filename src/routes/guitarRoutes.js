"use strict";

const express = require("express");
const router = express.Router();
const guitarController = require("./../controllers").guitarController;

router.route("/").get(async (req, res) => {
  const data = await guitarController.getAllGuitars();
  res.json(data);
});

router.route("/:guitarId").get(async (req, res) => {
  const guitarId = req.params.guitarId;
  const data = await guitarController.getGuitarById(guitarId);

  res.json(data);
});

router.route("/").post((req, res) => {
  res.json({ message: "Add a new guitar to the collection" });
});

router.route("/:guitarId").put((req, res) => {
  const guitarId = req.params.guitarId;
  res.json({ message: `Update existing guitar by ID: ${guitarId}` });
});

router.route("/:guitarId").delete((req, res) => {
  const guitarId = req.params.guitarId;
  res.json({ message: `Delete guitar by ID: ${guitarId}` });
});

module.exports = router;
