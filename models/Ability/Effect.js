const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const effectSchema = new Schema({
  healthChange: { type: Number },
  manaChange: { type: Number },
  buff: [
    {
      type: Schema.Types.ObjectId,
      ref: "Buff",
    },
  ],
});

const Effect = mongoose.model("Effect", effectSchema);

module.exports = Effect;
