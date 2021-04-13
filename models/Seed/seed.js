// import seeder from "mongoose-seed";

const seeder = require("mongoose-seed");
const ObjectID = require("mongodb").ObjectID;

const config = require("../../config/database");
const models = require("../../models");

seeder.connect(config.database, function () {
  seeder.loadModels(["models/Location/Continent.js"]);
  seeder.clearModels(
    [
      //   'Ability',
      //   'Effect',
      "Item",
      "Area",
      "City",
      "Continent",
      "Encounter",
      //   'Quest',
      //   'RandomWildlife',
      //   'ResourceList',
      "Road",
      "Town",
      "Zone",
      "Connection",
      "MonsterType",
      "Monster",
      "DropTable",
      "Task",
    ],
    function () {
      const seedList = [
        { id: ObjectID("605ec9ee753f6fa7d4b4ea6c"), name: "C_Anvilmar" },
        { id: ObjectID("605ec9ee753f6fa7d4b4ea6e"), name: "C_Northshire" },
        { id: ObjectID("605ec9ee753f6fa7d4b4ea70"), name: "C_Deathknell" },
        { id: ObjectID("6062bab2000d7e766c184558"), name: "T_Idle" }
      ];
      function getSeed(obj) {
        let object = seedList.filter((x) => x.name === obj);
        if (!object[0]) {
          let newId = { id: ObjectID(), name: obj };
          seedList.push(newId);
          console.log("newId for ", obj, " ", newId);
          return ObjectID(newId.id);
        } else {
          return ObjectID(object[0].id);
        }
      }
      const data = [
        {
          model: "Continent",
          documents: [
            {
              name: "Eastern Kingdoms",
              _id: getSeed("Eastern Kingdoms"),
            },
            { name: "Kalimdor", _id: getSeed("Kalimdor") },
            { name: "Outland", _id: getSeed("Outland") },
            { name: "Northrend", _id: getSeed("Northrend") },
            { name: "The Maelstrom", _id: getSeed("The Maelstrom") },
            { name: "Pandaria", _id: getSeed("Pandaria") },
            { name: "Draenor", _id: getSeed("Draenor") },
          ],
        },
        {
          model: "Connection",
          documents: [
            {
              name: "C_Dun Morogh_Loch Modan",
              _id: getSeed("C_Dun Morogh_Loch Modan"),
            },
            {
              name: "C_Elwynn Forest_Westfall",
              _id: getSeed("C_Elwynn Forest_Westfall"),
            },
            {
              name: "C_Tirisfal Glades_Silverpine",
              _id: getSeed("C_Tirisfal Glades_Silverpine"),
            },
            { name: "C_Anvilmar", _id: getSeed("C_Anvilmar") },
            { name: "C_Kharanos", _id: getSeed("C_Kharanos") },
            { name: "C_Northshire", _id: getSeed("C_Northshire"),
              areas:[{_id:getSeed("A_koboldCave_1")}],
          },
            { name: "C_Goldshire", _id: getSeed("C_Goldshire") },
            { name: "C_Deathknell", _id: getSeed("C_Deathknell") },
            { name: "C_Brill", _id: getSeed("C_Brill") },
            { name: "C_Ironforge", _id: getSeed("C_Ironforge") },
            { name: "C_Stormwind City", _id: getSeed("C_Stormwind City") },
            { name: "C_Undercity", _id: getSeed("C_Undercity") },
          ],
        },
        {
          model: "Road",
          documents: [
            {
              name: "R_DM_1",
              _id: getSeed("R_DM_1"),
              ticDistance: 6,
              connectionBegin: getSeed("C_Ironforge"),
              connectionEnd: getSeed("C_Kharanos"),
            },
            {
              name: "R_DM_2",
              _id: getSeed("R_DM_2"),
              ticDistance: 6,
              connectionBegin: getSeed("C_Kharanos"),
              connectionEnd: getSeed("C_Anvilmar"),
            },
            {
              name: "R_DM_3",
              _id: getSeed("R_DM_3"),
              ticDistance: 6,
              connectionBegin: getSeed("C_Kharanos"),
              connectionEnd: getSeed("C_Dun Morogh_Loch Modan"),
            },
            {
              name: "R_EF_1",
              _id: getSeed("R_EF_1"),
              ticDistance: 6,
              connectionBegin: getSeed("C_Stormwind City"),
              connectionEnd: getSeed("C_Goldshire"),
            },
            {
              name: "R_EF_2",
              _id: getSeed("R_EF_2"),
              ticDistance: 6,
              connectionBegin: getSeed("C_Goldshire"),
              connectionEnd: getSeed("C_Northshire"),
            },
            {
              name: "R_EF_3",
              _id: getSeed("R_EF_3"),
              ticDistance: 6,
              connectionBegin: getSeed("C_Goldshire"),
              connectionEnd: getSeed("C_Elwynn Forest_Westfall"),
            },
            {
              name: "R_TG_1",
              _id: getSeed("R_TG_1"),
              ticDistance: 6,
              connectionBegin: getSeed("C_Undercity"),
              connectionEnd: getSeed("C_Brill"),
            },
            {
              name: "R_TG_2",
              _id: getSeed("R_TG_2"),
              ticDistance: 6,
              connectionBegin: getSeed("C_Brill"),
              connectionEnd: getSeed("C_Deathknell"),
            },
            {
              name: "R_TG_3",
              _id: getSeed("R_TG_3"),
              ticDistance: 6,
              connectionBegin: getSeed("C_Brill"),
              connectionEnd: getSeed("C_Tirisfal Glades_Silverpine"),
            },
          ],
        },
        {
          model: "Item",
          documents: [
            {
              _id: getSeed("I_copper"),
              name: "I_copper",
              goldWorth: 1,
            },
            {
              _id: getSeed("I_copperOre"),
              name: "I_copperOre",
              goldWorth: 10,
            },
            {
              _id: getSeed("I_candle"),
              name: "I_candle",
              goldWorth: 20,
              type: "junk",
            },
            {
              _id: getSeed("I_lightLeather"),
              name: "I_lightLeather",
              goldWorth: 10,
            },
            {
              _id: getSeed("I_copperBar"),
              name: "I_copperBar",
              goldWorth: 10,
            },
            {
              _id: getSeed("I_testLeatherHat"),
              name: "I_testLeatherHat",
              goldWorth: 50,
              slot: 1,
              requirement: 1,
              strength: 1,
              dexterity: 1,
              intellect: 1,
              stamina: 1,
              spirit: 1,
              spellPower: 10,
              haste: 10,
              crit: 10,
              armor: 30,
            },
          ],
        },
        {
          model: "MonsterType",
          documents: [
            {
              _id: getSeed("MT_Humanoid"),
              creatureType: "MT_Humanoid",
            },
            {
              _id: getSeed("MT_Beast"),
              creatureType: "MT_Beast",
            },
          ],
        },
        {
          model: "Monster",
          documents: [
            {
              _id: getSeed("M_kobold"),
              level: 1,
              dropTable: getSeed("DT_kobold"),
              monsterType: getSeed("MT_Humanoid"),
            },
            {
              _id: getSeed("M_Wolf"),
              level: 1,
              monsterType: getSeed("MT_Beast"),
              skinable: {
                check: true,
                drop: getSeed("DT_lowSkinning"),
              },
            },
          ],
        },
        {
          model: "DropTable",
          documents: [
            {
              _id: getSeed("DT_kobold"),
              name: "DT_kobold",
              items: [
                {
                  item: getSeed("candle"),
                  chance: 10,
                },
              ],
            },
            {
              _id: getSeed("DT_lowSkinning"),
              name: "DT_lowSkinning",
              items: [
                {
                  item: getSeed("I_lightLeather"),
                  chance: 100,
                },
              ],
            },
          ],
        },
        {
          model: "Task",
          documents: [
            {
              taskType: "T_Idle",
              _id: getSeed("T_Idle"),
            },
          ],
        },
        // {
        //     'model': 'RandomWildlife',
        //     'documents':[]
        // },
        {
          model: "Encounter",
          documents: [
            {
              _id: getSeed("E_kobold_1"),
              name: "E_kobold_1",
              monster: getSeed("M_kobold"),
            },
          ],
        },
        {
          model: "Area",
          documents: [
            {
              _id: getSeed("A_koboldCave_1"),
              name: "A_koboldCave_1",
              encounters: [{ encounter: getSeed("E_kobold_1"), chance: 1 }],
            },
          ],
        },
        {
          model: "Zone",
          documents: [
            {
              name: "Dun Morogh",
              continent: getSeed("Eastern Kingdoms"),
              _id: getSeed("Dun Morogh"),
            },
            {
              name: "Elwynn Forest",
              continent: getSeed("Eastern Kingdoms"),
              _id: getSeed("Elwynn Forest"),
            },
            {
              name: "Tirisfal Glades",
              continent: getSeed("Eastern Kingdoms"),
              _id: getSeed("Tirisfal Glades"),
            },
            {
              name: "Westfall",
              continent: getSeed("Eastern Kingdoms"),
              _id: getSeed("Westfall"),
            },
            {
              name: "Loch Modan",
              continent: getSeed("Eastern Kingdoms"),
              _id: getSeed("Loch Modan"),
            },
            {
              name: "Silverpine Forest",
              continent: getSeed("Eastern Kingdoms"),
              _id: getSeed("Silverpine Forest"),
            },
          ],
        },

        //   {
        //     model: "Ability",
        //     documents: [],
        //   },
        //   {
        //     model: "Effect",
        //     documents: [],
        //   },

        {
          model: "Town",
          documents: [
            {
              name: "Anvilmar",
              zone: getSeed("Dun Morogh"),
              connection: getSeed("C_Anvilmar"),
            },
            {
              name: "Kharanos",
              zone: getSeed("Dun Morogh"),
              connection: getSeed("C_Kharanos"),
            },
            {
              name: "Northshire",
              zone: getSeed("Elwynn Forest"),
              connection: getSeed("C_Northshire"),
            },
            {
              name: "Goldshire",
              zone: getSeed("Elwynn Forest"),
              connection: getSeed("C_Goldshire"),
            },
            {
              name: "Deathknell",
              zone: getSeed("Tirisfal Glades"),
              connection: getSeed("C_Deathknell"),
            },
            {
              name: "Brill",
              zone: getSeed("Tirisfal Glades"),
              connection: getSeed("C_Brill"),
            },
          ],
        },
        {
          model: "City",
          documents: [
            {
              name: "Ironforge",
              zone: getSeed("Dun Morogh"),
              connection: getSeed("C_Ironforge"),
            },
            {
              name: "Stormwind City",
              zone: getSeed("Elwynn Forest"),
              connection: getSeed("C_Stormwind City"),
            },
            {
              name: "Undercity",
              zone: getSeed("Tirisfal Glades"),
              connection: getSeed("C_Undercity"),
            },
          ],
        },
        //   {
        //     model: "ResourceList",
        //     documents: [],
        //   },
        //   {
        //     model: "Quest",
        //     documents: [],
        //   },
      ];
      seeder.populateModels(data, function (err, done) {
        if (err) {
          return console.log("Seed err", err);
        }
        if (done) {
          return console.log("Seed Done", done);
        }

        seeder.disconnect();
      });
    }
  );
});

//E_encounterName_number
//M_monsterName_number
//T_taskName
//MT_monsterTypeName
//DT_dropTableName
//I_itemName
//R_AbbrZnName_number
//Connection:
//C_zone1_zone2
//C_Town or City name
