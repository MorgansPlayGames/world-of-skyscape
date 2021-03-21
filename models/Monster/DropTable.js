const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dropTableSchema = new Schema({
    
});

const DropTable = mongoose.model('DropTable', dropTableSchema);

module.exports = DropTable;