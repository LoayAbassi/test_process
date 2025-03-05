const jwt = require("jsonwebtoken");

require("dotenv").config();

const authMiddleware = (req,res,next) => {
    const authHeader = req.header("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({message:"access refusé"});
    }
    const token = authHeader.split(" ")[1];

    try{
        const decoded = jwt.verify(token,process.env.ACCESS_SECRET);
        req.user = decoded;
        next();
    }
    catch(error){
        return res.status(401).json({message:"access refusé"});
    }
}

module.exports = authMiddleware;