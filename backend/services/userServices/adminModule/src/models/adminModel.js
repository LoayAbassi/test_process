const mongoose = require("mongoose");

const User = require("../../../../../models/userModel");
const adminSchema = new mongoose.Schema({
    role:{
        type:String,
        default:"admin",
    }
});

const Admin = User.discriminator("Admin",adminSchema);

module.exports = Admin;

