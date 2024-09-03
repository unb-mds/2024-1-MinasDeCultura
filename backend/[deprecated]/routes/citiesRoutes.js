const express = require('express')
const router = express.Router()
const { getCities } = require('../controllers/citiesController')

router.get('/', getCities)

module.exports = router