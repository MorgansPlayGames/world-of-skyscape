import React from "react";
import GuildieStatCalc from "./GuildieStatCalc"

function GuildieStats(props) {
const selectedGuildie= props.selectedGuildie;
  return (<div>Guildie Stats
      <GuildieStatCalc selectedGuildie={selectedGuildie}  />
  </div>);
}
export default GuildieStats;
