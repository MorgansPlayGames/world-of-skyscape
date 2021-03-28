const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const encounterSchema = new Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
    required: "You need to have a unique name",
  },

  creationDate: {
    type: Date,
    default: Date.now,
  },

  encounterType: {
    type: String
  },

  monster: {
    type: Schema.Types.ObjectId,
    ref: "Monster",
  },
});

const Encounter = mongoose.model("Encounter", encounterSchema);

module.exports = Encounter;
