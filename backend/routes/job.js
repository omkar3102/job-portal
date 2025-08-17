const express = require("express");
const {createJob, getJob, getJobById, updateJob, uploadBulk } = require("../controllers/job");

const app = express();

app.use(express.json());

const router = express.Router();

router.get("/", getJob);
router.get("/:id", getJobById);
router.post("/createJob", createJob);
// router.post("/uploadBulk", uploadBulk);
router.post("/:id", updateJob);


module.exports = router;