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

  zone:{
    type: Schema.Types.ObjectId,
    ref: "Zone",
  },

  areas: [
    {
      type: Schema.Types.ObjectId,
      ref: "Area",
    },
    
]
});

const Road = mongoose.model("Road", roadSchema);

module.exports = Road;
