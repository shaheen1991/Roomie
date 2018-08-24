const router = require("express").Router();
const smacksController = require("../../controllers/smacktalkcontroller");

// Matches with "/api/smack"
router.route("/")
  .get(smacksController.findAll)
  .post(smacksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .put(smacksController.update)
  .delete(smacksController.remove);

module.exports = router;
