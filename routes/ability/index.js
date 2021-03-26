const router = require('express').Router();
const ABILITY = require('../../controllers/ability/abilityController');
const EFFECT = require('../../controllers/ability/effectController')

router.post('ability/add', ABILITY.addAbility);

router.post('effect/add', EFFECT.addEffect)

module.exports = router;
