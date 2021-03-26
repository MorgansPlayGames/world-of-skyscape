const db = require("../../models");
const ObjectID = require("mongodb").ObjectID;

module.exports = {
    addTown: async (req, res) => {
        let townBody= req.body;
        const newTown = new db.Town(townBody)
        newTown.save()
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