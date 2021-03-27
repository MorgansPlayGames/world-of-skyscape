const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const continentSchema = new Schema({
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
});

const Continent = mongoose.model("Continent", continentSchema);

module.exports = Continent;
