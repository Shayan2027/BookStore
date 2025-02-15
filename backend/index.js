const express = require('express');
const mongoose = require('mongoose')
const app = express();
const dotenv = require('dotenv');
const bookRoute = require('./route/book.route.js');
const userRoute = require('./route/user.route.js');
const cors = require('cors');

dotenv.config();

const PORT = process.env.PORT || 3000;
const Mongo_URI = process.env.Mongo_URI; 


//middleware

app.use(cors());
app.use(express.json());  // This is critical for parsing JSON request bodies
app.use(express.urlencoded({ extended: true }));

//connection to mongoDb

try {
    mongoose.connect(Mongo_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected to DB");
    
} catch (error) {
    console.log("Error", error);
    
}


//defining routes

app.use('/book', bookRoute);
app.use('/user', userRoute);


app.listen(PORT ,() =>{
    console.log(`Server is running on port ${PORT}`);
})