const Application = require("../models/Application");

const createApplication = async(req, res) => {
    try {

        const {coverLetter, status, question } = req.body;

        const payload = {
            coverLetter: coverLetter,
            status: status,
            question: question
        }

        const application = await Application.create(payload);
        if(!application) {
            res.status(404).json({message: "Application not submitted", success: false})
        }
        res.status(200).json({success: true, message: "Application submitted successfully", data: application})   
    
    } catch(e) {
        console.error("Application not submitted", e.message)
    }
    

}

// const bulkApplicationData = async (req, res) => {
//     try {

//         const dummyApplicationArray = [
//             {
//                 job: "64d1f8d13b0a3f9d9c12a111", // Replace with actual Job _id
//                 applicant: "64d1f8d13b0a3f9d9c12b222", // Replace with actual User _id
//                 coverLetter: "I am very passionate about this role and believe my skills align perfectly with your needs.",
//                 question: "What is the typical career growth path in this role?",
//                 status: "Applied"
//             },
//             {
//                 job: "64d1f8d13b0a3f9d9c12a112",
//                 applicant: "64d1f8d13b0a3f9d9c12b223",
//                 coverLetter: "With over 5 years in the industry, I bring both experience and enthusiasm.",
//                 question: "Is remote work possible for this position?",
//                 status: "ShortListed"
//             },
//             {
//                 job: "64d1f8d13b0a3f9d9c12a113",
//                 applicant: "64d1f8d13b0a3f9d9c12b224",
//                 coverLetter: "I am confident my background in design and project management makes me a strong candidate.",
//                 question: "What design tools does the team currently use?",
//                 status: "Interview Scheduled"
//             },
//             {
//                 job: "64d1f8d13b0a3f9d9c12a114",
//                 applicant: "64d1f8d13b0a3f9d9c12b225",
//                 coverLetter: "Though I am new to the field, I have completed several personal projects and internships.",
//                 question: "Are there mentorship opportunities available?",
//                 status: "Rejected"
//             },
//             {
//                 job: "64d1f8d13b0a3f9d9c12a115",
//                 applicant: "64d1f8d13b0a3f9d9c12b226",
//                 coverLetter: "I have successfully led multiple projects to completion and thrive in team environments.",
//                 question: "What technologies are in the current stack?",
//                 status: "Hired"
//             }
//         ]

//         const bulkJob = await Application.insertMany(dummyApplicationArray);
//         res.status(200).json({success: true, message: "Application uploads successful", data: bulkJob})
//     } catch(e) {
//         console.error("Applications not submitted successfully", e.message);
//         res.status(500).json({success: false, message: "Bulk Upload failed"})
//     }


// }

module.exports = {
    createApplication,
    // bulkApplicationData
};