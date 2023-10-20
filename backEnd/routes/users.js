const express = require('express')
const router = express.Router()

const { login, register,getUsers, sendEmail ,updateUserPassword} = require('../controllers/users');
router.post('/login', login);
router.post('/register',register)
router.put('/changePassword',sendEmail)
router.put("/updateUserPassword", updateUserPassword)
router.get("/getAll",getUsers)

module.exports = router