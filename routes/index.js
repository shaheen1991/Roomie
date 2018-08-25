const express = require('express');

const router = express.Router();
router.use('/api', require('./apiRoutes'));

// add HTML routes to current router
router.use(require('./htmlRoutes'));

module.exports = router;
