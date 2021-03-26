const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resourceListSchema = new Schema({
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

const ResourceList = mongoose.model("ResourceList", resourceListSchema);

module.exports = ResourceList;
