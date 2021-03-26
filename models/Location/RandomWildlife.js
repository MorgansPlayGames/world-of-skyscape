const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const randomWildlifeSchema = new Schema({
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

  zones: [
    {
      type: Schema.Types.ObjectId,
      ref: "Zone",
    },
]
});

const RandomWildlife = mongoose.model("RandomWildlife", randomWildlifeSchema);

module.exports = RandomWildlife;
