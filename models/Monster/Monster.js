const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const monsterSchema = new Schema({
    
});

const Monster = mongoose.model('Monster', monsterSchema);

module.exports = Monster;