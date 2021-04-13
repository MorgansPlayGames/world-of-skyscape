const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    taskType: {
        type: String,
        required:"taskType required"
    },
    goTo: {
        type: Schema.Types.ObjectId,
        ref: "Connection",
    },

    skinning:{
        type: Schema.Types.ObjectId,
        ref: "RandomWildlife",
    },
    gather:{
        type: Schema.Types.ObjectId,
        ref: "ResourceList",
    },
    grind:{
        type: Schema.Types.ObjectId,
        ref: "Area",
    }


});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;


//types of tasks: Zone
//type of task: Move to 
//type of task: Fight wildlife(skinning)
//type of task: gather
//type of task: Idle
//type of task: Grind Area