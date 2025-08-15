const Job = require("../models/Job");



const createJob = async (req, res) => {
    try {
        const {title, description, requirements ,minSalary, maxSalary, jobType, location} = req.body;
        
        const payload = {
            title: title,
            description: description,
            requirements: requirements,
            location: location,
            minSalary: minSalary,
            maxSalary: maxSalary,
            jobType: jobType
        }
        const job = await Job.create(payload);
        if(!job){
            res.status(404).json({success: false, message: "Job not created"});
        }
        res.status(200).json({success: true, data: job, message: "Job Posting created successfully"})
    } catch (e) {
        console.error("Job Posting not done succesfully", e.message)
        res.status(500).json({success: false, message: "Job Posting not successful"})
    }
}

const getJob = async (req, res) => {
    try {
        const job = await Job.find({});
        if(!job) {
            res.status(404).json({success: false, message: "Job Not Found"})
        }
        res.status(200).json({success: true, data: job, message: "Job Found Successfully!"})
    } catch (e) {
        console.error("Job Not Found", e.message);
        res.status(404).json({success: false, message: "Job Not Found!"})
    }

}
const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId);
        if(!job) {
            res.status(404).json({success: false, message: "Job Not Found"})
        }
        res.status(200).json({success: true, data: job, message: "Job Found Successfully!"})
    } catch (e) {
        console.error("Job Not Found", e.message);
        res.status(404).json({success: false, message: "Job Not Found!"})
    }

}

const updateJob = async (req, res) => {
    try {
        const jobId = req.params.id;
        const {title, description, requirements ,minSalary, maxSalary, jobType, location} = req.body;
        
        const payload = {
            title: title,
            description: description,
            requirements: requirements,
            location: location,
            minSalary: minSalary,
            maxSalary: maxSalary,
            jobType: jobType
        }

        const job = await Job.findByIdAndUpdate(jobId, payload);
        if(!job) {
            res.status(404).json({success: false, message: "Could Not find job"})
        }
        res.status(200).json({success: true, message: "Job Updated successfully!", data: job})
    } catch (e) {
        console.error("Job Not Updated", e.message);
        res.status(500).json({success: false, message: "Job Not Updated!"})
    }
}

module.exports = {
    createJob,
    getJob,
    getJobById,
    updateJob
};