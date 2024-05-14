var express = require("express");
var router = express.Router();
const userRouter = require("../src/user/routes");

router.use("/", userRouter);

module.exports = router;
