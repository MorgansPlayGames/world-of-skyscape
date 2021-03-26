const db = require("../../models");
const ObjectID = require("mongodb").ObjectID;

module.exports = {
    addZoneConnection: async (req, res) => {
        let zoneConnectionBody= req.body;
        const newZoneConnection = new db.ZoneConnection(zoneConnectionBody)
        newZoneConnection.save()
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