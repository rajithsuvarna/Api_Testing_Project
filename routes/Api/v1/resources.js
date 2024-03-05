const express = require("express");
const router = express.Router();
const resourceController = require("../../../controllers/resourceController");

router.get("/getbyid/:id");
router.get("/getAll");
router.post("/create");
router.put("/update/:id");
router.delete("/deletebyid/:id");

module.exports = router;
