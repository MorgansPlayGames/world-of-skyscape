const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const equipmentSchema = new Schema({
  headSlot: {
    type: Schema.Types.ObjectId,
    ref: "Item",
  },
  shoulderSlot: {
    type: Schema.Types.ObjectId,
    ref: "Item",
  },
  neckSlot: {
    type: Schema.Types.ObjectId,
    ref: "Item",
  },
  chestSlot: {
    type: Schema.Types.ObjectId,
    ref: "Item",
  },
  gloveSlot: {
    type: Schema.Types.ObjectId,
    ref: "Item",
  },
  pantsSlot: {
    type: Schema.Types.ObjectId,
    ref: "Item",
  },
  bootSlot: {
    type: Schema.Types.ObjectId,
    ref: "Item",
  },
  ringSlotOne: {
    type: Schema.Types.ObjectId,
    ref: "Item",
  },
  ringSlotTwo: {
    type: Schema.Types.ObjectId,
    ref: "Item",
  },
  trinketSlotOne: {
    type: Schema.Types.ObjectId,
    ref: "Item",
  },
  trinketSlotTwo: {
    type: Schema.Types.ObjectId,
    ref: "Item",
  },
  weaponSlotOne: {
    type: Schema.Types.ObjectId,
    ref: "Item",
  },
  weaponSlotTwo: {
    type: Schema.Types.ObjectId,
    ref: "Item",
  },
  shieldSlot: {
    type: Schema.Types.ObjectId,
    ref: "Item",
  },
  rangedSlot: {
    type: Schema.Types.ObjectId,
    ref: "Item",
  },
});

const Equipment = mongoose.model("Equipment", equipmentSchema);

module.exports = Equipment;
