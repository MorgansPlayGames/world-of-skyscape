const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roadSchema = new Schema({
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

  ticDistance:{
    type: Number,
  },

  connectionBegin: {
    type: Schema.Types.ObjectId,
    ref: "Connection",
    required: "Need a way to connect this to other things"
  },

  connectionEnd: {
    type: Schema.Types.ObjectId,
    ref: "Connection",
    required: "Need a way to connect this to other things"
  },
    
});

const Road = mongoose.model("Road", roadSchema);

module.exports = Road;
