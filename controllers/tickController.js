const db = require("../models");
const ObjectID = require("mongodb").ObjectID;
//check to see if movement done, if not, tick down.
async function moveCheck(guildie, task) {
  console.log(guildie.taskTime);
  console.log(task);
  if (guildie.taskTime === undefined || guildie.taskTime <= 0) {
    let location = await db.Road.findOne({
      $and: [
        {
          $or: [
            { connectionBegin: ObjectID(task.goTo) },
            { connectionEnd: ObjectID(task.goTo) },
          ],
        },
        {
          $or: [
            { connectionBegin: ObjectID(guildie.location) },
            { connectionEnd: ObjectID(guildie.location) },
          ],
        },
      ],
    });
    guildie.taskTime = location.ticDistance;
    guildie.save();
  } else if (guildie.taskTime > 1) {
    guildie.taskTime = guildie.taskTime - 1;
    guildie.save();
  } else if (guildie.taskTime > 0) {
    guildie.taskTime = guildie.taskTime - 1;
    guildie.location = ObjectID(task.goTo);
    guildie.task = ObjectID("6062bab2000d7e766c184558");
    guildie.save();
    console.log("should be 0:", guildie.taskTime);
  } else {
    console.log("Should not log");
  }
}
//check to create fight if in fight, do nothing.
async function fightCheck(guildie, task, combatList) {
  let check = false;
  //goes through the combat list and checks if there is a guildie there.
  let checkList = combatList.filter((combat) => {
    for (let i = 0; i > combat.guildies.length; i++) {
      if (combat.guildies[i]._id === guildie._id) {
        check = true;
      }
    }
  });
  if (check === false) {
    
    //check to see if they belong in party group and check if that exists

    //get area from task with encounter list
    let area = await db.Area.findById({_id:ObjectID(task.grind)})
    //roll encounter with encounter and chance
    let totalChance = 0;
    for(let i=0;i<area.encounters.length;i++){
      totalChance = totalChance+area.encounters[i].chance
    }
    let encounterRoll= Math.ceil(Math.random()*totalChance);
    let encounterRef;
    for(let i=0;i<encounterRoll;i++){
      encounterRef=area.encounters[i]
      if(encounterRef.chance>1){encounterRoll=encounterRoll-encounterRef.chance+1}
    }
    console.log(encounterRef);
    //get encounter and get the monster seed
    let encounter = await db.Encounter.find({_id:ObjectID(encounterRef.encounter)})
    console.log(encounter);
    //create new instance of monster
    
    //create new combat
    // newCombat = new db.Combat({guildies:[ObjectId(guildie._id)]},{monsters:[]});
  } else {console.log("enable fighting")}
}

async function tickLogic() {
  try {
    let guildieList = await db.Guildie.find({
      task: { $ne: ObjectID("605ec9ee753f6fa7d4b4ea6e") },
    });
    let taskList = await db.Task.find({
      task: { $ne: ObjectID("605ec9ee753f6fa7d4b4ea6e") },
    });
    let combatList = await db.Combat.find({});
    guildieList.length
      ? guildieList.map((guildie) => {
          let gTask;
          // console.log(guildie);
          taskList.map((task) => {
            // console.log(task._id)
            // console.log(guildie.task)
            let tId = JSON.stringify(task._id);
            let gId = JSON.stringify(guildie.task);
            // console.log(tId," ", gId);
            if (tId === gId) {
              gTask = task;
              // console.log(gTask)
            }
          });
          gTask.taskType === "goTo"
            ? moveCheck(guildie, gTask)
            : gTask.taskType === "grind"
            ? fightCheck(guildie, gTask, combatList)
            : console.log(ObjectID(guildie.task));
        })
      : console.log("no guildies to do actions on");
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  tick: tickLogic,
};
