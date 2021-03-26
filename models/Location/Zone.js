const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const zoneSchema = new Schema({
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

  continent: {
    type: Schema.Types.ObjectId,
    ref: "Continent",
  },

  resourceList: {
    type: Schema.Types.ObjectId,
    ref: "ResourceList",
  },
  randomWildlife: {
    type: Schema.Types.ObjectId,
    ref: "RandomWildlife",
  },

  towns: [
    {
      type: Schema.Types.ObjectId,
      ref: "Town",
    },
  ],

  areas: [
    {
      type: Schema.Types.ObjectId,
      ref: "Area",
    },
  ],
  roads: [
    {
      type: Schema.Types.ObjectId,
      ref: "Road",
    },
  ],
});

const Zone = mongoose.model("Zone", zoneSchema);

module.exports = Zone;
