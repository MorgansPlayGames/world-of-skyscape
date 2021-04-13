const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectID = require("mongodb").ObjectID;

const guildieSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    trim: true,
    unique: true,
    required: "You need to have a unique name",
  },

  race: {
    type: String,
    trim: true,
    default: "Human",
  },

  location: {
    type: Schema.Types.ObjectId,
    ref: "Connection",
    default: ObjectID('605ec9ee753f6fa7d4b4ea6e'),
  },

  creationDate: {
    type: Date,
    default: Date.now,
  },

  task: {
    type: Schema.Types.ObjectId,
    ref: "Task",
  },
  taskTime: { type: Number },
  experience: {
    type: Number,
    default: 0,
  },
  talents: { type: String, default: "" },
  gold: {
    type: Number,
    default: 0,
    min: 0,
  },
  currentHP: { type: Number, default: 10 },
  currentMP: { type: Number, default: 10 },
  currentRage: {
    type: Number,
    min: 0,
    default: 0,
  },
  currentfocus: {
    type: Number,
    min: 0,
    default: 100,
  },
  currentCP: {
    type: Number,
    min: 0,
    default: 0,
  },
  buffs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Buff",
    },
  ],
  professionOne: {
    type: Schema.Types.ObjectId,
    ref: "Profession",
  },
  professionTwo: {
    type: Schema.Types.ObjectId,
    ref: "Profession",
  },
  fishing: { type: Number, default: 1 },
  cooking: {
    type: Schema.Types.ObjectId,
    ref: "Profession",
  },
  medicine: {
    type: Schema.Types.ObjectId,
    ref: "Profession",
  },
  inventory: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
  abilities: [
    {
      type: Schema.Types.ObjectId,
      ref: "Ability",
    },
  ],
  equipment: {
    type: Schema.Types.ObjectId,
    ref: "Equipment",
  },

  statChoice: { type: Number, default: 0 },
});

const Guildie = mongoose.model("Guildie", guildieSchema);

module.exports = Guildie;
