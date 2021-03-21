const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    minLevel:{
        type: Number,
        default: 0,
    },
    rarity:{},
    goldWorth:{
        type: Number,
        default: 0,
    },
    type:{},
    onUse:{
        type: {
            type: Schema.Types.ObjectId,
            ref: "Ability",
        },
      },
    //ifEquipment
    slot:{
        type: Number,
        default: 0,
    },
    requirement:{
        type: Number,
        default: 0,
    },
    strength:{
        type: Number,
        default: 0,
    },
    dexterity:{
        type: Number,
        default: 0,
    },
    intellect:{
        type: Number,
        default: 0,
    },
    stamina:{
        type: Number,
        default: 0,
    },
    spirit:{
        type: Number,
        default: 0,
    },
    mp5:{
        type: Number,
        default: 0,
    },
    hp5:{
        type: Number,
        default: 0,
    },
    spellPower:{
        type: Number,
        default: 0,
    },
    haste:{
        type: Number,
        default: 0,
    },
    crit:{
        type: Number,
        default: 0,
    },   
    //ifWeapon
    minDamage:{
        type: Number,
        default: 0,
        min: 0,
    },
    maxDamage:{
        type: Number,
        default: 0,
        min: 0,
    },
    speed:{
        type: Number,
        default: 0,
        min: 0,
    },
    twoHanded:{
        type: Boolean,
        default: 0,
    },
    //ifArmor
    armor:{
        type: Number,
        default: 0,
    },
    block:{
        type: Number,
        default: 0,
        min: 0,
    }
    
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;