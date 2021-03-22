import React from 'react';
import GuildHolderDiv from '../Components/Guild'



export function Guild(props) {
  
  return (
      <div className="">
          <GuildHolderDiv userData={props.userData} setUserData={props.setUserData} />
      </div>
  )
};