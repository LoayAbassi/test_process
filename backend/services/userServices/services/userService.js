const User = require("../models/userModel");
const bcrypt = require ("bcrypt");
const jwt = require("jsonwebtoken");



const signup = async (userData) => {
    try {
        const {nom,prenom,email,mot_passe,date_naissance,role, genre} = userData;
        console.log(userData);
        
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

    const token = jwt.sign({id:user.id_utilisateur}, process.env.JWT_SECRET,{expiresIn:"5h"});
    return {"token": token, "message": "Connexion réussie"};
};


module.exports = {
    signup,
    login,
};