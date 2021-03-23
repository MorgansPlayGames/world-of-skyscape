import React from "react";

function ViewGuildie(props) {
  let guildies = props.guildies;
  
  return (
    <div>
      {guildies ? (
        guildies.map((guildie) => {
          return <div>{guildie.name}</div>;
        })
      ) : (
        <div>no guildies</div>
      )}
    </div>
  );
}
export default ViewGuildie;
