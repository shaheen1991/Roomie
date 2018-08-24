const router = require("express").Router();
const smackRoutes = require("./smack");

// Book routes
router.use("/smack", smackRoutes);
const choreRoutes = require("./chores");

// chore routes
router.use("/chores", choreRoutes);

module.exports = router;
