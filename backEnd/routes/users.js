const express = require('express')
const router = express.Router()

const { login, register, getAll, sendEmail ,updateUserPassword} = require('../controllers/users');
router.post('/login', login);
router.post('/register',register)
router.put('/changePassword',sendEmail)
router.put("/updateUserPassword", updateUserPassword)
router.get("/getAll",getAll)

module.exports = router