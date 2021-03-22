import React, { useState, useEffect, Component } from "react";
import GuildieSidebar from "./GuildieSidebar";
import NewGuildie from "./NewGuildie";
import ViewGuildie from "./ViewGuildie";
import GuildMain from "./GuildMain";
import { API } from "../../utils/API";

function GuildHolderDiv(props) {
  const [state, setState] = useState("");

  function handleNav(dir) {
    setState(dir);
  }

  return (
    <>
      <div className="flex">
        <GuildieSidebar handleNav={handleNav} />
        <div className="flex-1">
          {state === "/new" ? (
            <NewGuildie userData={props.userData} setUserData={props.setUserData}  />
          ) : state === "/main" ? (
            <GuildMain />
          ) : (
            <ViewGuildie />
          )}
        </div>
      </div>
    </>
  );
}
export default GuildHolderDiv;
