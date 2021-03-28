const db = require("../models");
const ObjectID = require("mongodb").ObjectID;

module.exports = {
    //Requires task and guildie to be passed in
    addTask: async (req, res) => {
        try{
        let taskBody= req.body.task;
        let guildie= req.body.guildie._id;
        const taskExists = await db.Task.find({taskBody});
        if(taskExists.length===1){
            const updateGuildie= await db.Guildie.updateOne({guildie},
                {task:ObjectID(taskExists._id)}
            )
            if(updateGuildie)
            res.status(201).json("updated guildie")
        } else {
            const newTask = new db.Task(taskBody);
            const updateGuildie= await db.Guildie.updateOne({guildie},
                {task:ObjectID(newTask._id)}
            )
            res.status(202).json("updated guildie, task created");
        }
    } catch(err) {
        res.status(500).json(err);
    }
    },

    addDropTable: async (req, res) => {
        let dropTableBody= req.body;
        const newDropTable = new db.DropTable(dropTableBody)
        newDropTable.save()
            .then(saved => {
                if(!saved){
                    res.status(400).json(false)
                }
                if(saved) {
                    return res.status(201).json("success, DropTable")
                }
            }).catch(error => {
                return res.status(500).json(error)
            });
    }
}