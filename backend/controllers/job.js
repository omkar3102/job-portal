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
// const uploadBulk = async (req, res) => {
//     try {

//         const dummyJobArray = [
//           {
//             title: "Frontend Developer",
//             description: "Develop responsive web interfaces using React.js and Tailwind CSS.",
//             requirements: ["React.js", "JavaScript", "HTML", "CSS", "Git"],
//             location: "New York, USA",
//             jobType: "Full-time",
//             minSalary: 60000,
//             maxSalary: 85000
//           },
//           {
//             title: "Backend Developer",
//             description: "Build scalable backend services and APIs using Node.js and MongoDB.",
//             requirements: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Docker"],
//             location: "Remote",
//             jobType: "Full-time",
//             minSalary: 70000,
//             maxSalary: 95000
//           },
//           {
//             title: "UI/UX Designer",
//             description: "Design intuitive user experiences and engaging interfaces for mobile and web.",
//             requirements: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping"],
//             location: "San Francisco, USA",
//             jobType: "Contract",
//             minSalary: 50000,
//             maxSalary: 70000
//           },
//           {
//             title: "Data Analyst",
//             description: "Analyze datasets to provide business insights and improve decision-making.",
//             requirements: ["SQL", "Python", "Excel", "Data Visualization", "Statistics"],
//             location: "London, UK",
//             jobType: "Part-time",
//             minSalary: 40000,
//             maxSalary: 60000
//           },
//           {
//             title: "DevOps Engineer",
//             description: "Manage CI/CD pipelines, cloud infrastructure, and deployment automation.",
//             requirements: ["AWS", "Jenkins", "Kubernetes", "Terraform", "Linux"],
//             location: "Toronto, Canada",
//             jobType: "Full-time",
//             minSalary: 80000,
//             maxSalary: 110000
//           }
//         ]
        
//         const bulkJob = await Job.insertMany(dummyJobArray);
//         res.status(200).json({success: true, message: "Bulk Job successful", data: bulkJob})
//     } catch (e) {
//         console.error("Could not bulk upload", e.message)
//     }
//     }


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

        const job = await Job.findByIdAndUpdate(jobId, payload, {new: true, runValidators: true});
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
    updateJob,
    // uploadBulk
};