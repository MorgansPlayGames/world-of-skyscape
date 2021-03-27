const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
    required: "You need to have a unique name",
  },

  connection: {
    type: Schema.Types.ObjectId,
    ref: "Connection",
    required: "Need a way to connect this to other things"
  },

  creationDate: {
    type: Date,
    default: Date.now,
  },

  zone: 
    {
      type: Schema.Types.ObjectId,
      ref: "Zone",
    },

});

const City = mongoose.model("City", citySchema);

module.exports = City;
