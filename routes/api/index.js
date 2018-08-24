const router = require("express").Router();
const choreRoutes = require("./chores");

// chore routes
router.use("/chores", choreRoutes);

module.exports = router;
