const express = require("express");
const createApplication = require("../controllers/application");

const app = express();
app.use(express.json());

const router = express.Router();

router.post("/createApplication", createApplication);


module.exports = router;