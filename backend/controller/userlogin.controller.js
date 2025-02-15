// In controller we can define functions that will be called when a route is hit.

const user = require('../model/user.model.js');  // Make sure this is the correct path to your model
const bcrypt = require('bcrypt');




const login = async(req, res) =>{
    try {
        const {email, password} = req.body;
        const User = await user.findOne({email});
        const isMatch = await bcrypt.compare(password , User.password)   //here first password is that which is given by the user and next one is picked from the database
        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid Password or Email"});
        }
        else{
            res.status(200).json({message:"Login successfull" ,User:{
                _id:User._id ,
                fullname:User.fullname,
                email:User.email
            }})
        }
    } catch (error) {
        console.log("Error"+ error.message);
        res.status(500).json({message:"Internal server error."})
        
    }
}





module.exports = login;


