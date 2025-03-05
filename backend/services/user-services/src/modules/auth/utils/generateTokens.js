const jwt = require("jsonwebtoken");


const generateVerificationToken = () =>{
    return Math.floor(100000+Math.random()*900000).toString();
}

const generateTokenAndSetCookies = (res, userId) =>{
    const token = jwt.sign(
        {userId},
        process.env.JWT_SECRET,
        {expiresIn: "7d",}
    );

    res.cookie("token",token,{
        httpOnly:true, // js can't access
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict", // avoiding csrf
        maxAge:7 * 24 * 60 * 60 * 1000

    });
    return token;
}

module.exports = {
    generateVerificationToken,
    generateTokenAndSetCookies
}