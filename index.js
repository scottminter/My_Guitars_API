const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { RateLimiterMemory } = require("rate-limiter-flexible");

const app = express();
const port = 8081;

const limiter = new RateLimiterMemory({
  points: 2, // allowed attempts
  duration: 50, // in this period of time
  blockDuration: 1, // block for this duration
});

const rateLimiterMiddleware = (req, res, next) => {
  limiter
    .consume(req.ip)
    .then(() => {
      next();
    })
    .catch(() => {
      res.status(429).send("Too Many Requests");
    });
};

app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(rateLimiterMiddleware);

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.post("/", (req, res) => {
  // console.log(JSON.stringify(req.body, null, 3));
  res.json(req.body);
});

app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});
