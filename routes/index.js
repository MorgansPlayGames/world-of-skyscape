const router = require('express').Router();
const path = require('path');
const userRoutes = require('./user');
const guildieRoutes = require('./guildie');
const locationRoutes = require('./location');
const abilityRoutes = require('./ability')
const monsterRoutes = require('./monster')

// User Routes
router.use('/user', userRoutes);
router.use('/guildie', guildieRoutes)
router.use('/location', locationRoutes)
router.use('/ability', abilityRoutes)
router.use('/monster', monsterRoutes)

// If no API routes are hit, send the React app
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
