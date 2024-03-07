//initializing
const express = require("express");
const router = express.Router();
const resourceController = require("../../../controllers/resourceController");

//routers for get,post,put,delete apis
router.get("/getbyid/:id", resourceController.getResourceByid);
router.get("/getAll", resourceController.getAllResource);
router.post("/create", resourceController.create);
router.put("/update/:id", resourceController.updateResource);
router.delete("/deletebyid/:id", resourceController.deleteResource);

//exporting
module.exports = router;
