const db = require("../../models");
const ObjectID = require("mongodb").ObjectID;

module.exports = {
    addZone: async (req, res) => {
        let zoneBody= req.body;
        const newZone = new db.Zone(zoneBody)
        newZone.save()
            .then(saved => {
                if(!saved){
                    res.status(400).json(false)
                }
                if(saved) {
                    return res.status(201).json("success, Zone")
                }
            }).catch(error => {
                return res.status(500).json(error)
            })
    }
}