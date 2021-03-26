const db = require("../../models");
const ObjectID = require("mongodb").ObjectID;

module.exports = {
    addContinent: async (req, res) => {
        let continentBody= req.body;
        const newContinent = new db.Continent(continentBody)
        newContinent.save()
            .then(saved => {
                if(!saved){
                    res.status(400).json(false)
                }
                if(saved) {
                    return res.status(201).json("success, continent")
                }
            }).catch(error => {
                return res.status(500).json(error)
            })
    }
}