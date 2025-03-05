require("dotenv").config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const URI = process.env.MONGO_URI;
        await mongoose.connect(URI);
        console.log("Connected to database");
    }
    catch(err){
        console.log("error connecting to mongo",err.message);
    }
};

module.exports = connectDB;

