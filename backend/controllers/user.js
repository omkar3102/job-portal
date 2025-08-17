const User = require("../models/User")

const createUser = async (req, res) => {

    try {

        const {username, emailId, password, role } = req.body;

        const payload = {
            username: username,
            emailId: emailId,
            password: password,
            role: role
        }
        
        const users = await User.create(payload)
        if(!users) {
            res.status(404).json({success: false, message: "User not created",})
        }
        res.status(200).json({success: true, data: users, message: "User created successfully."})
    } catch(e) {
        console.error("User not created", e.message);
        res.status(500).json({message: "User could not be created"})
    }

}

const getUser = async(req, res) => {
    try {
        // const userId = req.params.id;

        const user = await User.find({});
        if(!user) {
            res.status(404).json({success: false, message: "User Not Found"})
        }
        res.status(200).json({success: true, data: user, message:"User Found Successfully"})
    } catch(e) {
        console.error("User not found", e.message)
        res.status(500).json({message: "User Not Found bud!", success: false})
    }
    }

const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        if(!user) {
            res.status(404).json({message: "User Not Found", success: false})
        }
        res.status(200).json({success: true, data: user, message: "User Found Successfully!"})
    } catch (e) {
        console.error("User Not Found", e.message);
        res.status(500).json({success: false, message: "User Not Found"})
    }
}

const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const {username, emailId, password, role } = req.body;

        const payload = {
            username: username,
            emailId: emailId,
            password: password,
            role: role
        }
        const user = await User.findByIdAndUpdate(userId, payload, { new: true, runValidators: true })
        if(!user) {
            res.status(404).json({success:false, message: "User is not updated"})
        }
        res.status(200).json({success: true, message: "User is updated successfully!", data: user})
    } catch(e) {
        console.error("User is not updated", e.message);
        res.status(500).json({success: false, message: "User is not updated"})
    }
}

// const uploadBulk = async (req, res) => {
//     try {

//         const dummyUserArray = [
//             {
//                 username: "john_doe",
//                 emailId: "john@example.com",
//                 password: "hashedpassword123", // Normally this would be a hashed value
//                 role: "jobseeker"
//             },
//             {
//                 username: "sarah_recruiter",
//                 emailId: "sarah.hr@example.com",
//                 password: "hashedpassword456",
//                 role: "recruiter"
//             },
//             {
//                 username: "mike_tech",
//                 emailId: "mike@example.com",
//                 password: "hashedpassword789",
//                 role: "jobseeker"
//             },
//             {
//                 username: "emma_recruiter",
//                 emailId: "emma.hr@example.com",
//                 password: "hashedpassword321",
//                 role: "recruiter"
//             },
//             {
//                 username: "lucas_dev",
//                 emailId: "lucas@example.com",
//                 password: "hashedpassword654",
//                 role: "jobseeker"
//             }
//         ]
        
//         const bulkJob = await User.insertMany(dummyUserArray);
//         res.status(200).json({success: true, message: "Bulk Job successful", data: bulkJob})
//     } catch (e) {
//         console.error("Could not bulk upload", e.message)
//     }
//     }




module.exports = {
    createUser,
    getUser,
    getUserById,
    updateUser,
    // uploadBulk
}