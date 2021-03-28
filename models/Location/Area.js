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
  encounters: [
    {
      encounter: {
        type: Schema.Types.ObjectId,
        ref: "Encounter",
      },
      chance: {type: Number},
    },
  ],
});

const Area = mongoose.model("Area", areaSchema);

module.exports = Area;
