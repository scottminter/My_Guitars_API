"use strict";

const { RateLimiterMemory } = require("rate-limiter-flexible");

// TODO: these should be moved to a .env file
const limiter = new RateLimiterMemory({
  points: 2, // allowed attempts
  duration: 50, // in this period of time
  blockDuration: 1, // block for this duration
});

const rateLimiterMiddleware = (req, res, next) => {
  // if (req.url.startsWith("/tokens")) {
  console.log("rate limit tokens route");
  limiter
    .consume(req.ip)
    .then(() => {
      next();
    })
    .catch(() => {
      res.status(429).send("Too Many Requests");
    });
  // } else {
  // next();
  // }
};

module.exports = rateLimiterMiddleware;
