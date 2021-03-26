const db = require("../../models");
const ObjectID = require("mongodb").ObjectID;

module.exports = {
    addQuest: async (req, res) => {
        let questBody= req.body;
        const newQuest = new db.Quest(questBody)
        newQuest.save()
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