const db = require("../models");
const ObjectID = require("mongodb").ObjectID;

module.exports = {
    addMonster: async (req, res) => {
        let monsterBody= req.body;
        const newMonster = new db.Monster(monsterBody)
        newMonster.save()
            .then(saved => {
                if(!saved){
                    res.status(400).json(false)
                }
                if(saved) {
                    return res.status(201).json("success, Monster")
                }
            }).catch(error => {
                return res.status(500).json(error)
            });
    },

    addMonsterType: async (req, res) => {
        let monsterTypeBody= req.body;
        const newMonsterType = new db.MonsterType(monsterTypeBody)
        newMonsterType.save()
            .then(saved => {
                if(!saved){
                    res.status(400).json(false)
                }
                if(saved) {
                    return res.status(201).json("success, MonsterType")
                }
            }).catch(error => {
                return res.status(500).json(error)
            });
    }
}