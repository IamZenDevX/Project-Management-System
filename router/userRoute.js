const express = require("express");
const router = express.Router();

const {deleteuser, getalluser, login, register} = require("../controller/userController");



router.delete("/deleteuser/id/:id",  deleteuser);

router.get("/getalluser",  getalluser);

router.post("/login",  login);

router.post("/register",  register);

module.exports = router;