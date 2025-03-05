const express = require("express");
const loadEnv = require("../config/dotenv");
const connectDB = require("../config/database");
const authRoutes = require("./auth/auth.routes");

loadEnv();
connectDB();
const app = express();
app.use(express.json());


const PORT = process.env.PORT;

app.use("/api/auth",authRoutes);

app.listen(PORT,()=>{
    console.log("running on port: ",PORT);
});

module.exports = app;