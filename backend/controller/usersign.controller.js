// In controller we can define functions that will be called when a route is hit.

const user = require('../model/user.model.js');  // Make sure this is the correct path to your model
const bcrypt = require('bcrypt');

const signup = async (req, res) => {
    console.log("Full Request Body:", req.body);
    console.log("Request Headers:", req.headers);

    try {
        const { fullname, email, password, mobile } = req.body;
        console.log("Extracted Data:", fullname, email, mobile);

        // Check if user already exists
        const existingUser = await user.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already registered" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance
        const createdUser = new user({  // Changed to 'user' (lowercase)
            fullname: fullname,
            email: email,
            password: hashedPassword,
            mobile: mobile
        });

        // Save the user to the database
        await createdUser.save();
        res.status(201).json({ message: "User created successfully" ,
            User:{
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email
            },
        });

    } catch (error) {
        console.log("Error ", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

module.exports = signup;






