//setup express and router
const express = require("express");
const router = express.Router();

//using middleware
router.use("/api", require("./Api/index"));

//exporting
module.exports = router;
