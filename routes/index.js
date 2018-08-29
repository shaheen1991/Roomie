const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
const express = require('express');

const router = express.Router();
router.use('/api', require('./apiRoutes'));

// add HTML routes to current router
router.use(require('./htmlRoutes'));

module.exports = router;
