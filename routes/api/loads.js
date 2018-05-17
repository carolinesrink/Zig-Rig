const router = require("express").Router();
const loadTemplateController = require("../../controllers/loadTemplateController");

// Matches with "/api/loads"
router.route("/")
  .get(loadTemplateController.findAll)
  .post(loadTemplateController.create);

// Matches with "/api/loads/:id"
router
  .route("/:id")
  .get(loadTemplateController.findById)
  .put(loadTemplateController.update)
  .delete(loadTemplateController.remove);

module.exports = router;