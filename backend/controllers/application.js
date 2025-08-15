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

module.exports = createApplication;