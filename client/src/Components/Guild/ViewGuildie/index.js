import React, { useState } from "react";
import GuildieSidebar from "./GuildieSidebar";
import GuildieStats from "./GuildieStats"
import GuildieTasks from "./GuildieTasks"

function ViewGuildie(props) {
  const [guildieNav, setGuildieNav] = useState([]);
  let guildies = props.guildies;
  let selectedGuildie = guildies[props.selectedGuildie];
  console.log(selectedGuildie);

  function handleGuildieNav(dir) {
    setGuildieNav(dir);
  }

  return (
    <div className="flex">
      <GuildieSidebar handleGuildieNav={handleGuildieNav} selectedGuildie={selectedGuildie} />
      <div className="flex-1">StatsGoHere or pages whatever
        {guildieNav==="/stats" ?
            <GuildieStats selectedGuildie={selectedGuildie} />
            : guildieNav==="/tasks" ?
            <GuildieTasks selectedGuildie={selectedGuildie} />
            :
            <div>Please Select a menu</div>
      }
      </div>
    </div>
  );
}
export default ViewGuildie;
