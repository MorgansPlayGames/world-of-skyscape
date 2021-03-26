const db = require("../../models");
const ObjectID = require("mongodb").ObjectID;

module.exports = {
    addEncounter: async (req, res) => {
        let encounterBody = req.body;
        const newEncounter = new db.Encounter(encounterBody)
        newEncounter.save()
            .then(saved => {
                if(!saved){
                    res.status(400).json(false)
                }
                if(saved) {
                    return res.status(201).json("success, Encounter")
                }
            }).catch(error => {
                return res.status(500).json(error)
            })
    }
}