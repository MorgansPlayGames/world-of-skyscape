const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const townSchema = new Schema({
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

  connection: {
    type: Schema.Types.ObjectId,
    ref: "Connection",
    required: "Need a way to connect this to other things"
  },

  zone: {
      type: Schema.Types.ObjectId,
      ref: "Zone",
    },

});

const Town = mongoose.model("Town", townSchema);

module.exports = Town;
