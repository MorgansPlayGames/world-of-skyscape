const router = require('express').Router();

const AREA = require( "../../controllers/locations/areaController");
const CITY = require( "../../controllers/locations/cityController");
const CONNECTION = require( "../../controllers/locations/connectionController");
const CONTINENT = require( "../../controllers/locations/continentController");
const ENCOUNTER = require( "../../controllers/locations/encounterController");
const QUEST = require( "../../controllers/locations/questController");
const RANDOMWILDLIFE = require( "../../controllers/locations/randomWildlifeController");
const RESOURCELIST = require( "../../controllers/locations/resourceListController");
const ROAD = require( "../../controllers/locations/roadController");
const TOWN = require( "../../controllers/locations/townController");
const ZONE = require( "../../controllers/locations/zoneController");

router.post("/area/create", AREA.addArea);
router.post("/city/create", CITY.addCity);
router.post("/continent/create", CONTINENT.addContinent);
router.post("/encounter/create", ENCOUNTER.addEncounter);
router.post("/quest/create", QUEST.addQuest);
router.post("/randomwildlife/create", RANDOMWILDLIFE.addRandomWildlife);
router.post("/resourcelist/create", RESOURCELIST.addResourceList);
router.post("/road/create", ROAD.addRoad);
router.post("/town/create", TOWN.addTown);
router.post("/connection/create", CONNECTION.addConnection);
router.post("/zone/create", ZONE.addZone);

module.exports = router;