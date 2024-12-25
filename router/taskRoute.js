const express = require("express");
const router = express.Router();

const {createtask, gettask, updatetaskstatus} = require("../controller/taskController");



router.post("/createtask",  createtask);

router.get("/gettask/id/:id",  gettask);

router.put("/updatetaskstatus/id/:id",  updatetaskstatus);

module.exports = router;