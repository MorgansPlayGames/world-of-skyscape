import React, { useState, useEffect } from "react";
import GuildieSidebar from "./GuildieSidebar";
import GuildieStats from "./GuildieStats"
import GuildieTasks from "./GuildieTasks"
import GuildieTravel from "./GuildieTravel"
import GuildieGrind from "./GuildieGrind"
import { API } from "../../../utils/API";


function ViewGuildie(props) {
  const [guildieNav, setGuildieNav] = useState([]);
  const [travelOptions, setTravelOptions]=useState([])
  const [grindOptions, setGrindOptions] = useState([])
  let guildies = props.guildies;
  let selectedGuildie = guildies[props.selectedGuildie];

  function handleGuildieNav(dir) {
    setGuildieNav(dir);
  }

  useEffect(async () => {
    let selectedGuildie = guildies[props.selectedGuildie];
    let getTravelOptions = await API.getTravelOptions(selectedGuildie);
    let getGrindOptions = await API.getGrindOptions(selectedGuildie)
    setGrindOptions(getGrindOptions)
    setTravelOptions(getTravelOptions);
  }, [selectedGuildie]);


  return (
    <div className="flex">
      <GuildieSidebar handleGuildieNav={handleGuildieNav} selectedGuildie={selectedGuildie} />
      <div className="flex-1">StatsGoHere or pages whatever
        {guildieNav==="/stats" ?
            <GuildieStats selectedGuildie={selectedGuildie} />
            : guildieNav==="/tasks" ?
            <GuildieTasks selectedGuildie={selectedGuildie} travelOptions={travelOptions} />
            :guildieNav==="/tasks/travel" ?
            <GuildieTravel selectedGuildie={selectedGuildie} travelOptions={travelOptions} />
            :guildieNav==="/tasks/grind" ?
            <GuildieGrind selectedGuildie={selectedGuildie} grindOptions={grindOptions} />
            :
            <div>Please Select a menu</div>
      }
      </div>
    </div>
  );
}
export default ViewGuildie;
