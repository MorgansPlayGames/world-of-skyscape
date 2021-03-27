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
      //   'Area',
      "City",
      "Continent",
      //   'Encounter',
      //   'Quest',
      //   'RandomWildlife',
      //   'ResourceList',
      'Road',
      "Town",
      "Zone",
      "Connection",
      "MonsterType",
      "Monster",
      "DropTable",
    ],
    function () {
      const seedList = [
        { id: ObjectID('605ec9ee753f6fa7d4b4ea6c'), name: 'CAnvilmar' },
        { id: ObjectID('605ec9ee753f6fa7d4b4ea6e'), name: 'CNorthshire' },
        { id: ObjectID('605ec9ee753f6fa7d4b4ea70'), name: 'CDeathknell' }
    ];
      function getSeed(obj) {
        let object = seedList.filter((x) => x.name === obj);
        if (!object[0]) {
          let newId = { id: ObjectID(), name: obj };
          seedList.push(newId);
          console.log("newId for ",obj," ",newId);
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
              name: "CDun Morogh_Loch Modan",
              _id: getSeed("CDun Morogh_Loch Modan"),
            },
            {
              name: "CElwynn Forest_Westfall",
              _id: getSeed("CElwynn Forest_Westfall"),
            },
            {
              name: "CTirisfal Glades_Silverpine",
              _id: getSeed("CTirisfal Glades_Silverpine"),
            },
            { name: "CAnvilmar", _id: getSeed("CAnvilmar") },
            { name: "CKharanos", _id: getSeed("CKharanos") },
            { name: "CNorthshire", _id: getSeed("CNorthshire") },
            { name: "CGoldshire", _id: getSeed("CGoldshire") },
            { name: "CDeathknell", _id: getSeed("CDeathknell") },
            { name: "CBrill", _id: getSeed("CBrill") },
            { name: "CIronforge", _id: getSeed("CIronforge") },
            { name: "CStormwind City", _id: getSeed("CStormwind City") },
            { name: "CUndercity", _id: getSeed("CUndercity") },
          ],
        },
        {
          model: "Road",
          documents: [
            {
              name: "R_DM_1",
              _id: getSeed("R_DM_1"),
              ticDistance: 6,
              connectionBegin: getSeed("CIronforge"),
              connectionEnd: getSeed("CKharanos"),
            },
            {
              name: "R_DM_2",
              _id: getSeed("R_DM_2"),
              ticDistance: 6,
              connectionBegin: getSeed("CKharanos"),
              connectionEnd: getSeed("CAnvilmar"),
            },
            {
              name: "R_DM_3",
              _id: getSeed("R_DM_3"),
              ticDistance: 6,
              connectionBegin: getSeed("CKharanos"),
              connectionEnd: getSeed("CDun Morogh_Loch Modan"),
            },
            {
              name: "R_EF_1",
              _id: getSeed("R_EF_1"),
              ticDistance: 6,
              connectionBegin: getSeed("CStormwind City"),
              connectionEnd: getSeed("CGoldshire"),
            },
            {
              name: "R_EF_2",
              _id: getSeed("R_EF_2"),
              ticDistance: 6,
              connectionBegin: getSeed("CGoldshire"),
              connectionEnd: getSeed("CNorthshire"),
            },
            {
              name: "R_EF_3",
              _id: getSeed("R_EF_3"),
              ticDistance: 6,
              connectionBegin: getSeed("CGoldshire"),
              connectionEnd: getSeed("CElwynn Forest_Westfall"),
            },
            {
              name: "R_TG_1",
              _id: getSeed("R_TG_1"),
              ticDistance: 6,
              connectionBegin: getSeed("CUndercity"),
              connectionEnd: getSeed("CBrill"),
            },
            {
              name: "R_TG_2",
              _id: getSeed("R_TG_2"),
              ticDistance: 6,
              connectionBegin: getSeed("CBrill"),
              connectionEnd: getSeed("CDeathknell"),
            },
            {
              name: "R_TG_3",
              _id: getSeed("R_TG_3"),
              ticDistance: 6,
              connectionBegin: getSeed("CBrill"),
              connectionEnd: getSeed("CTirisfal Glades_Silverpine"),
            },
          ],
        },
        {
          model: "Item",
          documents: [
            {
              _id: getSeed("copper"),
              name: "copper",
              goldWorth: 1,
            },
            {
              _id: getSeed("copper ore"),
              name: "copper ore",
              goldWorth: 10,
            },
            {
              _id: getSeed("candle"),
              name: "candle",
              goldWorth: 20,
              type: "junk",
            },
            {
              _id: getSeed("light leather"),
              name: "light leather",
              goldWorth: 10,
            },
            {
              _id: getSeed("copper bar"),
              name: "copper bar",
              goldWorth: 10,
            },
            {
              _id: getSeed("test leather hat"),
              name: "test leather hat",
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
              _id: getSeed("Humanoid"),
              creatureType: "Humanoid",
            },
            {
              _id: getSeed("Beast"),
              creatureType: "Beast",
            },
          ],
        },
        {
          model: "Monster",
          documents: [
            {
              _id: getSeed("Kobold"),
              level: 1,
              dropTable: getSeed("Kobold Drops"),
              monsterType: getSeed("Humanoid"),
            },
            {
              _id: getSeed("Wolf"),
              level: 1,
              monsterType: getSeed("Beast"),
              skinable: {
                check: true,
                drop: getSeed("Low Skinning"),
              },
            },
          ],
        },
        {
          model: "DropTable",
          documents: [
            {
              _id: getSeed("Kobold Drops"),
              name: "Kobold Drops",
              items: [
                {
                  item: getSeed("candle"),
                  chance: 10,
                },
              ],
            },
            {
              _id: getSeed("Low Skinning"),
              name: "Low Skinning",
              items: [
                {
                  item: getSeed("light leather"),
                  chance: 100,
                },
              ],
            },
          ],
        },

        // {
        //     'model': 'RandomWildlife',
        //     'documents':[]
        // },
        // {
        //     'model': 'Area',
        //     'documents':[]
        // },
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
        //   {
        //     model: "Encounter",
        //     documents: [],
        //   },
        {
          model: "Town",
          documents: [
            {
              name: "Anvilmar",
              zone: getSeed("Dun Morogh"),
              connection: getSeed("CAnvilmar"),
            },
            {
              name: "Kharanos",
              zone: getSeed("Dun Morogh"),
              connection: getSeed("CKharanos"),
            },
            {
              name: "Northshire",
              zone: getSeed("Elwynn Forest"),
              connection: getSeed("CNorthshire"),
            },
            {
              name: "Goldshire",
              zone: getSeed("Elwynn Forest"),
              connection: getSeed("CGoldshire"),
            },
            {
              name: "Deathknell",
              zone: getSeed("Tirisfal Glades"),
              connection: getSeed("CDeathknell"),
            },
            {
              name: "Brill",
              zone: getSeed("Tirisfal Glades"),
              connection: getSeed("CBrill"),
            },
          ],
        },
        {
          model: "City",
          documents: [
            {
              name: "Ironforge",
              zone: getSeed("Dun Morogh"),
              connection: getSeed("CIronforge"),
            },
            {
              name: "Stormwind City",
              zone: getSeed("Elwynn Forest"),
              connection: getSeed("CStormwind City"),
            },
            {
              name: "Undercity",
              zone: getSeed("Tirisfal Glades"),
              connection: getSeed("CUndercity"),
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
