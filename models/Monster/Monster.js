const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const monsterSchema = new Schema({
  level: {
    type: Number,
  },
  dropTable: {
    type: Schema.Types.ObjectId,
    ref: "DropTable",
  },
  monsterType: {
    type: Schema.Types.ObjectId,
    ref: "MonsterType",
  },
  skinable: {
    check: {
      type: Boolean,
      default: false,
    },
    drop: {
      type: Schema.Types.ObjectId,
      ref: "DropTable",
    },
  },
});

const Monster = mongoose.model("Monster", monsterSchema);

module.exports = Monster;
