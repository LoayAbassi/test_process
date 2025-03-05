const User = require("./auth.model")
const {generateVerificationToken, generateTokenAndSetCookies} = require("./utils/generateTokens.js");
const hashPassword = require("./utils/hashPassword.js");
const sendEmail = require("./utils/email");

const signupService = async(userData)=>{
        
        const {
            nom, 
            prenom, 
            email, 
            password, 
            genre,
            role,
        } = userData;

        if (!nom || !prenom || !email || !password || !genre || !role){
           throw new Error("All fields are required");
        }

        const userAlreadyExists = await User.findOne({email});
        
        if (userAlreadyExists){
            throw new Error ("User already exists");
        }
        
        try {
            const hashedPassword = await hashPassword(password); 
            const verificationToken = generateVerificationToken();
            const user = new User({
                nom,
                prenom,
                email,
                password: hashedPassword,
                genre,
                role,
                verificationToken,
                verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000 // 24 hours
            });
            await user.save();
            // jwt 
            // generateTokenAndSetCookies(res, user._id);

            sendEmail (user.email, "verify your account","verification", {name:prenom, code : verificationToken});
            return {
                success:true,
                message:"created",
                user:{
                    ...user._doc,
                    password: undefined,
                }
            }
        
        } catch (error) {
            console.log("error: ", error);
            throw new Error ("Something went wrong");
        }


};

const verifyEmailService= async(data)=>{
    const {code} = data;
    const user = await User.findOne({
        verificationToken: code,
        verificationTokenExpiresAt: {$gt: Date.now()}
    });
    if (!user){
        throw new Error("invalid or expired code");

    }
    user.isVerified = true;
    user.verificationToken = undefined; // no need to keep them in db
    user.verificationTokenExpiresAt = undefined;
    await user.save();
    sendEmail(user.email, "Welcome", "welcome", {name:user.prenom});

    return {
        success: true,
        message:"email verified successfully",
        user:{
            ...user._doc,
            password:undefined
        }
    }
};

module.exports = {
    signupService,
    verifyEmailService,

}



















/*const User = require("./auth.model");
const bcrypt = require ("bcrypt");
const jwt = require("jsonwebtoken");
const sendEmail = require("./email.service");


const generateTokens= (user) =>{
    const accessToken = jwt.sign(
        {userId: user._id, email:user.email},
        process.env.ACCESS_SECRET,
        {expiresIn: "1d"}
    );

    const refreshToken = jwt.sign(
        {userId: user._id},
        process.env.REFRESH_SECRET,
        {expiresIn: "7d"}
    );

    return {accessToken, refreshToken};
};

const generateResetToken = (user) =>{
    return jwt.sign(
        {userId:user._id,email:user.email},
        process.env.RESET_SECRET,
        {expiresIn: "15m"}
    );
};

const signup = async (userData) => {
    try {
        const {nom,prenom,email,mot_passe,date_naissance,role, genre} = userData;
        const exist = await User.findOne({email});
        if (exist){
            return {message: "email déja existant"};
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPWD = await bcrypt.hash(mot_passe,salt);
        const newUser = new User({
            nom,
            prenom,
            email,
            mot_passe: hashedPWD,
            date_naissance,
            role,
            genre,
        });
        await newUser.save();
        const e_mail = await sendEmail(
            email,
            "Bienvenue "+prenom+" sur cofat",
            "Votre compte est crée avec succée"
        );
        return {message: "Utilisateur créee avec succès"};
    } catch (error) {
        return {error: error.message};
    }
};
const login = async (userData) => {
    const {email, mot_passe} = userData;
    const user = await User.findOne({email});
    if (!user){
        return {message: "Email ou mot de passe incorrect"};
    }
    const correct = await bcrypt.compare(mot_passe, user.mot_passe);
    if (!correct){
        return {message: "Email ou mot de passe incorrect"};
    }
    const tokens = generateTokens(user);
    return {"message": "Connexion réussie", tokens};
};

const forgetPassword = async(email)=>{
    try {
        const user = await User.findOne({email});
        if (!user){
            return {message:"utilisateur non trouvé"};
        }

        const resetToken = generateResetToken(user);
        user.resetToken = resetToken;
        await user.save();

        const e_mail = await sendEmail(
            user.email,
            "Reset password for "+user.nom+" "+user.prenom,
            user.resetToken
        );
        return {message:e_mail};
    } catch (error) {
        return {message:"server error "+error};
    }
};

const verifyResetToken = (token)=>{
    try{
        return jwt.verify(token,process.env.RESET_SECRET);
    }catch(error){
        return error;
    }
};

module.exports = {
    signup,
    login,
    forgetPassword
};

*/