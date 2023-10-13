"use strict";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const rateLimiterMiddleware = require("./src/middlewares").rateLimiter;
const guitarRoutes = require("./src/routes").guitar;
const authRoutes = require("./src/routes").auth;

const app = express();
const port = 8081;

app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(rateLimiterMiddleware);
app.use("/api/guitars", guitarRoutes);
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});
