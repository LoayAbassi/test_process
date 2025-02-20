require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./services/userServices/routes/userRoutes");
const questionRoutes = require("./services/testServices/module_question/src/routes/questionRoute");
const app = express();
app.use(express.json());


const PORT = process.env.PORT ;

connectDB().then(()=>{
    app.listen(PORT || 1500, async()=>{
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err)=>{
    console.error(err);
}); 

app.use("/api/",userRoutes);
app.use("/api/",questionRoutes)





