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

router.route("/").post(async (req, res) => {
  const body = req.body;
  try {
    const response = await guitarController.createNewGuitar(body);
    res.json(response);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
});

router.route("/:guitarId").patch(async (req, res) => {
  const body = req.body;
  try {
    const response = await guitarController.updateGuitar(body);
    res.json(response);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
});

router.route("/:guitarId").delete(async (req, res) => {
  const guitarId = req.params.guitarId;
  try {
    const response = await guitarController.deleteGuitar(guitarId);
    res.json(response);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
});

module.exports = router;
