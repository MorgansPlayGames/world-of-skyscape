const db = require("../models");
const ObjectID = require("mongodb").ObjectID;

module.exports = {
    addAbility: async (req, res) => {
        let abilityBody= req.body;
        const newAbility = new db.Ability(abilityBody)
        newAbility.save()
            .then(saved => {
                if(!saved){
                    res.status(400).json(false)
                }
                if(saved) {
                    return res.status(201).json("success")
                }
            }).catch(error => {
                return res.status(500).json(error)
            })
    }
}