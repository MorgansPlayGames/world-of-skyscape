const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const guildieSchema = new Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
    required: "You need to have a unique name",
  },

  race: {
    type: String,
    trim: true,
    required: "Last Name is Required",
  },

  location: {},

  creationDate: {
    type: Date,
    default: Date.now,
  },

  experience: { 
      type: Number 
    },
  talents: { type: String },
  gold: { 
      type: Number,
      default: 0,
      min: 0,
     },
  currentHP: { type: Number },
  currentMP: { type: Number },
  currentRage: { 
      type: Number,
      min: 0,
     },
  currentfocus: { 
      type: Number,
      min: 0,
    },
  currentCP: { 
      type: Number,
      min: 0,
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
  fishing: { type: Number },
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

  statChoice: { type: Number },
});

const Guildie = mongoose.model("Guildie", guildieSchema);

module.exports = Guildie;
