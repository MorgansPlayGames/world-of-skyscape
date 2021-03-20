const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guildieSchema = new Schema({
    guildie: String,
});

const Guildie = mongoose.model('Guildie', guildieSchema);

module.exports = Guildie;
