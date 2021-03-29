const router = require('express').Router();
const GUILDIE = require('../../controllers/guildieController.js');
const TASK = require('../../controllers/taskController')
const checkAuth = require('../../utils/auth');

router.post('/add', GUILDIE.addGuildie);

router.post('/remove', GUILDIE.removeGuildie);

router.post('/getall', GUILDIE.getAllGuildies);

router.post('/gettraveloptions', GUILDIE.getTravelOptions);

router.post('/getgrindoptions', GUILDIE.getGrindOptions);

router.post('/settask', TASK.addTask)

module.exports = router;
