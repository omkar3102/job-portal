const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
        // required: true
    },
    applicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        // required: true
    },
    coverLetter : {
        type: String
    },
    question: {
        type: String,
    },
    status: {
        type: String,
        enum: ["Applied", "ShortListed", "Interview Scheduled", "Rejected", "Hired"],
        default: "Applied"
    },
}, {timestamps: true})


const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;