import AREA from "../../controllers/locations/areaController";
import CITY from "../../controllers/locations/cityController";
import CONNECTION from "../../controllers/locations/connectionController";
import CONTINENT from "../../controllers/locations/continentController";
import ENCOUNTER from "../../controllers/locations/encounterController";
import QUEST from "../../controllers/locations/questController";
import RANDOMWILDLIFE from "../../controllers/locations/randomWildlifeController";
import RESOURCELIST from "../../controllers/locations/resourceListController";
import ROAD from "../../controllers/locations/roadController";
import TOWN from "../../controllers/locations/townController";
import ZONE from "../../controllers/locations/zoneController";

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