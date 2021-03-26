const db = require("../../models");
const ObjectID = require("mongodb").ObjectID;

module.exports = {
    addArea: async (req, res) => {
        let areaBody= req.body;
        const newArea = new db.Area(areaBody)
        newArea.save()
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