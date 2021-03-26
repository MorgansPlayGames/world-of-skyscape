const db = require("../../models");
const ObjectID = require("mongodb").ObjectID;

module.exports = {
    addRandomWildlife: async (req, res) => {
        let randomWildlifeBody= req.body;
        const newRandomWildlife = new db.RandomWildlife(randomWildlifeBody)
        newRandomWildlife.save()
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