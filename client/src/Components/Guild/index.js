import React, { useState, useEffect, Component } from "react";
import GuildieSidebar from "./GuildieSidebar";
import NewGuildie from "./NewGuildie";
import ViewGuildie from "./ViewGuildie";
import GuildMain from "./GuildMain";
import { API } from "../../utils/API";

function GuildHolderDiv(props) {
  const [state, setState] = useState("");
  const [guildies, setGuildies] = useState([]);

  useEffect(async () => {
    // how do I get username?!
    let user = props.userData;
    let getGuildies = await API.getGuildies(user);
    setGuildies(getGuildies);
  }, []);

  function handleNav(dir) {
    setState(dir);
  }

  return (
    <>
      <div className="flex">
        <GuildieSidebar handleNav={handleNav} guildies={guildies} />
        <div className="flex-1">
          {state === "/new" ? (
            <NewGuildie userData={props.userData} setUserData={props.setUserData}  />
          ) : state === "/main" ? (
            <GuildMain />
          ) : (
            <ViewGuildie guildies={guildies} />
          )}
        </div>
      </div>
    </>
  );
}
export default GuildHolderDiv;
