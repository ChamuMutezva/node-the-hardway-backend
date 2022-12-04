const express = require('express');

const {
    loginUser,
    signupUser
} = require('../controllers/userController')

const router = express.Router();
router.use(express.json())

// login route
router.post('/api/login', loginUser)

// signup route
router.post('/api/signup', signupUser)

module.exports = router