const router = require('express').Router();
const path = require('path');
const userRoutes = require('./user');
const guildieRoutes = require('./guildie')

// User Routes
router.use('/user', userRoutes);
router.use('/guildie', guildieRoutes)

// If no API routes are hit, send the React app
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
