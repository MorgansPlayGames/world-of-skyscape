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
      //   'Item',
      //   'Area',
      //   'City',
      "Continent",
      //   'Encounter',
      //   'Quest',
      //   'RandomWildlife',
      //   'ResourceList',
      //   'Road',
      "Town",
      "Zone",
      //   'ZoneConnection',
      //   'Monster',
      //   'DropTable',
    ],
    function () {
      const seedList = [];
      function getSeed(obj) {
        let object = seedList.filter((x) => x.name === obj);
        if (!object[0]) {
          let newId = { id: ObjectID(), name: obj };
          seedList.push(newId);
          console.log("newId for ", obj);
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
        // {
        //     'model': 'Item',
        //     'documents':[]
        // },
        // {
        //     'model': 'DropTable',
        //     'documents':[]
        // },
        // {
        //     'model': 'Monster',
        //     'documents':[]
        // },
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
              name: "Eversong Woods",
              continent: getSeed("Eastern Kingdoms"),
              _id: getSeed("Eversong Woods"),
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
        //   {
        //     model: "ZoneConnection",
        //     documents: [],
        //   },
        //   {
        //     model: "Road",
        //     documents: [],
        //   },
        {
          model: "Town",
          documents: [
            {
              name: "Anvilmar",
              zone: getSeed("Dun Morogh"),
            },
            {
              name: "Kharanos",
              zone: getSeed("Dun Morogh"),
            },
            {
              name: "Northshire",
              zone: getSeed("Elwynn Forest"),
            },
            {
              name: "Goldshire",
              zone: getSeed("Elwynn Forest"),
            },
            {
              name: "Deathknell",
              zone: getSeed("Tirisfal Glades"),
            },
            {
              name: "Brill",
              zone: getSeed("Tirisfal Glades"),
            },
          ],
        },
        //   {
        //     model: "City",
        //     documents: [],
        //   },
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
