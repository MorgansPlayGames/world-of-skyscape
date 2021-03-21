const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  item: {
    type: Schema.Types.ObjectId,
    ref: "Item",
  },
  numCreated: {
    type: Number,
    default: 1,
  },
  ingredients: [{
    type: Schema.Types.ObjectId,
    ref: "Item",
  }],
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
