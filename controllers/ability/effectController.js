const db = require("../models");
const ObjectID = require("mongodb").ObjectID;

module.exports = {
    addEffect: async (req, res) => {
        let effectBody= req.body;
        const newEffect = new db.Effect(effectBody)
        newEffect.save()
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