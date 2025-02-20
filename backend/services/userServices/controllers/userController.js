const userService = require ('../services/userService');

const signup = async (req, res) => {
    try {
        const user = await userService.signup(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const user = await userService.login(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json({message: error.message});
    }
};

module.exports = {
    signup,
    login
};

