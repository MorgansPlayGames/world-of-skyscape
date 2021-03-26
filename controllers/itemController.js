const db = require("../models");
const ObjectID = require("mongodb").ObjectID;

module.exports = {
    addItem: async (req, res) => {
        let itemBody= req.body;
        const newItem = new db.Item(itemBody)
        newItem.save()
            .then(saved => {
                if(!saved){
                    res.status(400).json(false)
                }
                if(saved) {
                    return res.status(201).json("success, Item")
                }
            }).catch(error => {
                return res.status(500).json(error)
            })
    }
}