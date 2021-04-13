const db = require("../models");
const ObjectID = require("mongodb").ObjectID;

module.exports = {
  //Requires task and guildie to be passed in
  //Only goTo and grind are active.
  addTask: async (req, res) => {
    console.log("adding Task")
    try {
        
      let taskBody = req.body.task;
      let guildie = req.body.guildie._id;
      let taskId;
      let taskType;
      if(taskBody.goTo) {taskId=taskBody.goTo;taskType="goTo";}
      else if(taskBody.grind) { taskId=taskBody.grind; taskType="grind";
      } else {taskId=""; taskType="T_idle" }
      const taskExists = await db.Task.find({ [taskType]:ObjectID(taskId) });
      if (taskExists.length === 1) {
        const updateGuildie = await db.Guildie.updateOne(
          { _id:ObjectID(guildie) },
          { task: ObjectID(taskExists[0]._id) }
        );
        if (updateGuildie) res.status(201).json(updateGuildie);
      } else {
        const newTask = new db.Task(taskBody);
        newTask.save()
        const updateGuildie = await db.Guildie.updateOne(
          { _id:ObjectID(guildie) },
          { task: ObjectID(newTask._id) }
        );
        res.status(202).json(updateGuildie);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
