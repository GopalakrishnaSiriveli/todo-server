const express = require('express');
const AuthController = require('../controllers/authController');
const validateEmail = require('../middleware/validateEmail');

const router = express.Router();

router.post('/register', validateEmail, AuthController.registerUser);
router.post('/login', AuthController.loginUser);

module.exports = router;




