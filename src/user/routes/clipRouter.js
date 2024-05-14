var express = require("express");
var router = express.Router();
const clipController = require("../controllers/clipController");

router.post("/", clipController.createClip);

router.get("/", clipController.getClips);

router.get("/:id", clipController.getClip);

router.delete("/:id", clipController.deleteClip);

router.get("/presenters", clipController.getPresenters);

module.exports = router;
