const router = require('express').Router();
const ITEM = require('../../controllers/itemController');


router.post('/add', ITEM.addItem);

module.exports = router;
