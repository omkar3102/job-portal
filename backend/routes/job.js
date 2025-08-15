const express = require("express");
const {createJob, getJob, getJobById, updateJob } = require("../controllers/job");

const app = express();

app.use(express.json());

const router = express.Router();

router.get("/", getJob);
router.post("/createJob", createJob);
router.get("/:id", getJobById);
router.post("/:id", updateJob);

module.exports = router;