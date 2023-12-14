var express = require('express');
var router = express.Router();
const CardController = require('../controllers/CardController');

/* GET home page. */
router.get('/', CardController.viewAll);

module.exports = router;
