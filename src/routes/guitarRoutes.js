"use strict";

const express = require("express");
const router = express.Router();
const guitarController = require("./../controllers").guitarController;

router.route("/").get((req, res) => {
  guitarController.getAllGuitars();
  res.json({ message: "Get all guitars" });
});

router.route("/:guitarId").get((req, res) => {
  const guitarId = req.params.guitarId;
  guitarController
    .getGuitarById(guitarId)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(404).message("Bad Request");
    });
  // res.json({ message: `Get guitar by ID: ${guitarId}` });
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
