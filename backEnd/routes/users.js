const express = require('express')
const router = express.Router()

const { login, register, getAll, sendEmail } = require('../controllers/users');
router.post('/login', login);
router.post('/register',register)
router.put('/changePassword',sendEmail)

module.exports = router