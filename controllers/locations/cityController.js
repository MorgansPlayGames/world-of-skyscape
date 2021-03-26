const db = require("../../models");
const ObjectID = require("mongodb").ObjectID;

module.exports = {
    addCity: async (req, res) => {
        let cityBody= req.body;
        const newCity = new db.City(cityBody)
        newCity.save()
            .then(saved => {
                if(!saved){
                    res.status(400).json(false)
                }
                if(saved) {
                    return res.status(201).json("success, city")
                }
            }).catch(error => {
                return res.status(500).json(error)
            })
    }
}