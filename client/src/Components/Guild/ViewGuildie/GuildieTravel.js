import React from "react";
import GuildieStatCalc from "./GuildieStatCalc";

function GuildieTravel(props) {
  let guildieOptions = props.guildieOptions;
  let selectedGuildie = props.selectedGuildie;
  console.log(props.guildieOptions);
  return (
    <div>
      Guildie Travel Tasks!
      {guildieOptions.length ? (
        guildieOptions.map((option, index) => {
          return (
            <div key={index}>
              {option.connectionBegin.name === selectedGuildie.location.name
                ? option.connectionEnd.name
                : option.connectionBegin.name}
            </div>
          );
        })
      ) : (
        <div>No options found</div>
      )}
    </div>
  );
}

export default GuildieTravel;
