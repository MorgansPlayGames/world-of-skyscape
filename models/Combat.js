const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const combatSchema = new Schema({
  guildies: [{
      type: Schema.Types.ObjectId,
      ref: "Guildie",
  }],
  monsters: [{
    type: Schema.Types.ObjectId,
    ref: "Monster",
  }],
  
});

const Combat = mongoose.model("Combat", combatSchema);

module.exports = Combat;
