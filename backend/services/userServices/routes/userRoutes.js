const express = require ('express');
const userController = require ("../controllers/userController");

const router = express.Router();

router.post("/auth/signup",userController.signup);
router.post("/auth/login",userController.login);

module.exports = router;
