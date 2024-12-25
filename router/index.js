const express = require("express");
const router = express.Router();

const organizationRoute = require("./organizationRoute");
const projectRoute = require("./projectRoute");
const taskRoute = require("./taskRoute");
const userRoute = require("./userRoute");

router.use("/organization", organizationRoute);
router.use("/project", projectRoute);
router.use("/task", taskRoute);
router.use("/user", userRoute);

module.exports = router;
