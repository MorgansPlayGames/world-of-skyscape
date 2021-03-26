const db = require("../../models");
const ObjectID = require("mongodb").ObjectID;

module.exports = {
    addRoad: async (req, res) => {
        let roadBody= req.body;
        const newRoad = new db.Road(roadBody)
        newRoad.save()
            .then(saved => {
                if(!saved){
                    res.status(400).json(false)
                }
                if(saved) {
                    return res.status(201).json("success, Road")
                }
            }).catch(error => {
                return res.status(500).json(error)
            })
    }
}