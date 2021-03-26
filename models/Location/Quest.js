const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questSchema = new Schema({
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

const Quest = mongoose.model("Quest", questSchema);

module.exports = Quest;
