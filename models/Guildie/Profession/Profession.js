const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const professionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  skill: {
    type: Number,
  },
  recipies: [
    {
      type: Schema.Types.ObjectId,
      ref: "Recipe",
    },
  ],
});

const Profession = mongoose.model("Profession", professionSchema);

module.exports = Profession;
