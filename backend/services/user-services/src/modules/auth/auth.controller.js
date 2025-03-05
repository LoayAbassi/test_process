const {signupService, verifyEmailService} = require("./auth.service");

const signup = async(req,res)=>{
    try {
        const result = await signupService(req.body);
        
        return res.status(201).json(result);
    } catch (error) {
        return res.status(400).json({error:error.message});
        
    }
}

const verifyEmail = async(req, res)=>{
    try {
        const result = await verifyEmailService(req.body);
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json({success:false ,error:error.message})
    }
}

const login = async(req,res)=>{
    res.send("login route");
}

const logout = async(req,res)=>{
    res.send("logout route");
}
module.exports = {
    signup,
    login,
    logout,
    verifyEmail
}


















/*const authService = require ('./auth.service');

const signup = async (req, res) => {
    try {
        const user = await authService.signup(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const user = await authService.login(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json({message: error.message});
    }
};

const forget = async(req,res)=>{
    try {
        const {email} = req.body;
        const send = await authService.forgetPassword(email);
        res.status(200).json(send);
    } catch (error) {
        res.status(500).json("error in server")
    }
}

module.exports = {
    signup,
    login,
    forget,
};

*/