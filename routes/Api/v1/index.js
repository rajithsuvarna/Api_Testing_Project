const express = require("express");
const router = express.Router();

router.use("/resources", require("./resources"));

module.exports = router;
