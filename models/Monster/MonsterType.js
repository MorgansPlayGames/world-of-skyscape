const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const monsterTypeSchema = new Schema({
  creatureType: {
    type: String,
  },
});

const MonsterType = mongoose.model("MonsterType", monsterTypeSchema);

module.exports = MonsterType;
