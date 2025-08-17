const express = require("express");
const {createApplication, bulkApplicationData } = require("../controllers/application");

const app = express();
app.use(express.json());

const router = express.Router();

router.post("/createApplication", createApplication);
// router.post("/bulkApplication", bulkApplicationData);

module.exports = router;