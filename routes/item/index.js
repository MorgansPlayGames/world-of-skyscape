const router = require('express').Router();
const ITEM = require('../../controllers/itemController');

router.post('/add', ITEM.addItem);
router.post('/droptable/add', ITEM.addDropTable);

module.exports = router;
