var express = require("express");
var router = express.Router();
const clipRouter = require("./clipRouter");

router.use("/clip", clipRouter);

module.exports = router;
