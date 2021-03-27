const db = require("../../models");
const ObjectID = require("mongodb").ObjectID;

module.exports = {
    addConnection: async (req, res) => {
        let connectionBody= req.body;
        const newConnection = new db.Connection(connectionBody)
        newConnection.save()
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