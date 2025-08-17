const express = require("express");
const { createUser, getUser, updateUser, getUserById, uploadBulk}  = require("../controllers/user");
const app =  express();

app.use(express.json());

const router = express.Router();

router.get("/", getUser);
router.post("/createUser", createUser);
router.get("/:id", getUserById);
// router.post("/uploadBulk", uploadBulk);
router.post("/:id", updateUser);


module.exports = router;