const db = require("../../models");
const ObjectID = require("mongodb").ObjectID;

module.exports = {
    addResourceList: async (req, res) => {
        let resourceListBody= req.body;
        const newResourceList = new db.ResourceList(resourceListBody)
        newResourceList.save()
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