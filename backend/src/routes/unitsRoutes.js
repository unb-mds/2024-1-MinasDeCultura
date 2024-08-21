const express = require('express')
const router = express.Router()
const { getUnits } = require('../controllers/unitsController')

router.get('/', getUnits)

module.exports = router
