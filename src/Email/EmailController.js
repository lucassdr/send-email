const express = require('express')
const router = express.Router()
const EmailService = require('./EmailService')

router.post('/send', EmailService.sendMail)

module.exports = router