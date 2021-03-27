const router = require('express').Router();
const MONSTER = require('../../controllers/monsterController');


router.post('/add', MONSTER.addMonster);
router.post('/monstertype/add', MONSTER.addMonsterType)


module.exports = router;
