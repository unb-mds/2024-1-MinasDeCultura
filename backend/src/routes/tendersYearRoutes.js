const express = require('express');
const router = express.Router();
const tendersYearController = require('../controllers/tendersYearController');

router.get('/', tendersYearController.getTendersByYear);

module.exports = router;