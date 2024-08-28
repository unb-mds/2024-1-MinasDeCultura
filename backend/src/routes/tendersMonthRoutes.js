const express = require('express');
const router = express.Router();
const tendersMonthController = require('../controllers/tendersMonthController');

router.get('/', tendersMonthController.getTendersByMonth);

module.exports = router;