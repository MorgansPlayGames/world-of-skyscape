import React from "react";
import GuildieStatCalc from "./GuildieStatCalc";
import SetButtonTask from "./Button/SetTaskButton"

function GuildieTravel(props) {
  let travelOptions = props.travelOptions;
  let selectedGuildie = props.selectedGuildie;
  return (
    <div>
      Guildie Travel Tasks!
      {travelOptions.length ? (
        travelOptions.map((option, index) => {
          let connection;
          option.connectionBegin.name === selectedGuildie.location.name
                ? connection = option.connectionEnd
                : connection = option.connectionBegin
          return (
            <SetButtonTask option={connection} taskType="goTo" guildie={selectedGuildie} key={index} />
          );
        })
      ) : (
        <div>No options found</div>
      )}
    </div>
  );
}

export default GuildieTravel;
