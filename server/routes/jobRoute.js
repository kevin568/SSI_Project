const express = require("express");
const jobController = require("../controller/jobController");

const router = express.Router();

router.route("/").get(jobController.getAllJob).post(jobController.createJob);

router.route("/:id").get(jobController.getJob);

router.route("/:id").get(jobController.getJob).delete(jobController.deleteJob);

module.exports = router;
