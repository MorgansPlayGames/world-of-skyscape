// import seeder from "mongoose-seed";

const seeder = require("mongoose-seed");
const ObjectID = require("mongodb").ObjectID;

const config = require("../../config/database");
const models = require("../../models");

const seedList = []
function getSeed(obj){
    let object = seedlist.filter(x=>x.name===obj)
    if(object===null){
        let newId = {id:ObjectID(), name:obj}
        seedlist.push(newId);
        return newId.id;
    } else {
        return object.id;
    }
}

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
      //   'Town',
      //   'Zone',
      //   'ZoneConnection',
      //   'Monster',
      //   'DropTable',
    ],
    function () {
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

const data = [
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
  // {
  //     'model': 'Zone',
  //     'documents':[]
  // },
  {
    model: "Continent",
    documents: [
      { name: "Eastern Kingdoms" },
      { name: "Kalimdor" },
      { name: "Outland" },
      { name: "Northrend" },
      { name: "The Maelstrom" },
      { name: "Pandaria" },
      { name: "Draenor" },
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
  //   {
  //     model: "Town",
  //     documents: [],
  //   },
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
