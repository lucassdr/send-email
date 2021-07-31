const express = require('express')
const router = express.Router()
const HealthService = require('./HealthService')

router.post('/', HealthService.health)

module.exports = router