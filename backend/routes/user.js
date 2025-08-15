const express = require("express");
const { createUser, getUser, updateUser, getUserById}  = require("../controllers/user");
const app =  express();

app.use(express.json());

const router = express.Router();

router.get("/", getUser);
router.post("/createUser", createUser);
router.get("/:id", getUserById);
router.post("/:id", updateUser);


module.exports = router;