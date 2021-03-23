import React, { useState, useEffect } from "react";

import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

function GuildieSidebar(props) {
  const [guildNavbar, setGuildNavbar] = useState([])

  function guildNav() {
    let newGuild = {
      title: "New Guildie",
      itemId: "/new",
    };
    let noGuild = {
      title: "Please add a guildie",
      itemId: "/none"
    };
    let gNav=[];
    (props.guildies)
      ? gNav = props.guildies.map((guildie, index) => {
          return ({
            title: guildie.name,
            itemId: index
          });
        })
      : gNav = [noGuild, newGuild];
      gNav = [...gNav, newGuild];
      setGuildNavbar(gNav);
  }

  useEffect(() => {
    guildNav()
  }, []);

  return (
    <div className="w-64 h-screen bg-white flex-initial">
      <Navigation
        // you can use your own router's api to get pathname
        activeItemId="/management/members"
        onSelect={({ itemId }) => {
          // maybe push to the route
          console.log(itemId);
          props.handleNav(itemId);
        }}
        items={[
          {
            title: "Guild Name Here",
            itemId: "/main",
          },
          {
            title: "Guildies",
            itemId: "/viewAllGuildies",
            subNav: guildNavbar,
          },
          {
            title: "Another Item",
            itemId: "/another",
            subNav: [
              {
                title: "Teams",
                itemId: "/management/teams",
              },
            ],
          },
        ]}
      />
    </div>
  );
}
export default GuildieSidebar;
