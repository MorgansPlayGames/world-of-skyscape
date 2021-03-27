const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dropTableSchema = new Schema({
  name: {
    type: String,
  },
  
  items: [
    {
      item: {
        type: Schema.Types.ObjectId,
        ref: "Item",
      },
      chance: { type: Number, default: 100 },
      maxDrop: {
        type: Number,
        default: 1,
      },
      minDrop: {
        type: Number,
        default: 1,
      },
    },
  ],
});

const DropTable = mongoose.model("DropTable", dropTableSchema);

module.exports = DropTable;
