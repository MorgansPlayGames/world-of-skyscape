const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const buffSchema = new Schema({
    
});

const Buff = mongoose.model('Buff', buffSchema);

module.exports = Buff;