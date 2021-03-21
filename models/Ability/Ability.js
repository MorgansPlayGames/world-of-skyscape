const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const abilitySchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  target: {
    type: Number,
    default: 0,
  },
  castTime: {
    type: Number,
    default: 0,
  },
  manaCost: {
    type: Number,
    default: 0,
  },
  rageCost: {
    type: Number,
    default: 0,
  },
  energyCost: {
    type: Number,
    default: 0,
  },
  healthCost: {
    type: Number,
    default: 0,
  },
  materialCost: {
    type: Schema.Types.ObjectId,
    ref: "Item",
  },
  targetEffect: {
    type: Schema.Types.ObjectId,
    ref: "Effect",
  },
  stanceRequirement: {
    type: Schema.Types.ObjectId,
    ref: "Buff",
  },
});

const Ability = mongoose.model("Ability", abilitySchema);

module.exports = Ability;
