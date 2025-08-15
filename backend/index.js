const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require("./routes/user")
const jobRoutes = require("./routes/job");
const applicationRoutes = require("./routes/application");

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000

//middleware
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Backend is up!");
});

app.use("/api/users", userRoutes);
app.use("/api/job", jobRoutes);
app.use("/api/application", applicationRoutes);
// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  });
})
.catch((err) => {
    console.error("DB Connection Failed:", err);
})







