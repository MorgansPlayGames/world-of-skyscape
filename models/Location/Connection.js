const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const connectionSchema = new Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
    required: "You need to have a unique name",
  },
  areas:[{
    type: Schema.Types.ObjectId,
    ref: "Area",
  
  }],

  creationDate: {
    type: Date,
    default: Date.now,
  },
});

const Connection = mongoose.model("Connection", connectionSchema);

module.exports = Connection;
