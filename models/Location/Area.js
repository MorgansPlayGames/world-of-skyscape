const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const areaSchema = new Schema({
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
  zone: 
    {
      type: Schema.Types.ObjectId,
      ref: "Zone",
    },

});

const Area = mongoose.model("Area", areaSchema);

module.exports = Area;
