import React from "react";
import SetButtonTask from "./Button/SetTaskButton"


function GuildieGrind(props) {
  let grindOptions = props.grindOptions[0].areas;
  let selectedGuildie = props.selectedGuildie;
   
  return (
    <div>
      Guildie grind Tasks!
      {grindOptions.length ? (
        grindOptions.map((option, index) => {
          return (
            <SetButtonTask option={option} taskType="grind" guildie={selectedGuildie} key={index} />
          );
        })
      ) : (
        <div>No options found</div>
      )}
    </div>
  );
}
export default GuildieGrind;
