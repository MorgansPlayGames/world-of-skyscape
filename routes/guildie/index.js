const router = require('express').Router();
const GUILDIE = require('../../controllers/guildieController.js');
const checkAuth = require('../../utils/auth');

router.post('/add', GUILDIE.addGuildie);

router.post('/remove', GUILDIE.removeGuildie);

router.post('/getall', GUILDIE.getAllGuildies);

module.exports = router;
