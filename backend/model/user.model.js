const { mongoose } = require('mongoose')

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    }
    
})

const user = mongoose.model('user', userSchema)

module.exports = user;