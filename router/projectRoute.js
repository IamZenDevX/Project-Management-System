const express = require("express");
const router = express.Router();

const {addmembertoproject, createproject, deleteproject, getallprojects, getprojectbyid, getprojectbyorganizationid} = require("../controller/projectController");



router.post("/addmembertoproject/projectid/:projectid",  addmembertoproject);

router.post("/createproject",  createproject);

router.delete("/deleteproject/id/:id",  deleteproject);

router.get("/getallprojects",  getallprojects);

router.get("/getprojectbyid/id/:id",  getprojectbyid);

router.get("/getprojectbyorganizationid/id/:id",  getprojectbyorganizationid);

module.exports = router;