const express = require("express");
const router = express.Router();

const {addorganization, deleteorganization, getorganization, updateorganization} = require("../controller/organizationController");



router.post("/addorganization",  addorganization);

router.delete("/deleteorganization/id/:id",  deleteorganization);

router.get("/getorganization/id/:id",  getorganization);

router.put("/updateorganization/id/:id",  updateorganization);

module.exports = router;