const router = require("express").Router();
const smackRoutes = require("./smack");

// Book routes
router.use("/smack", smackRoutes);

module.exports = router;
