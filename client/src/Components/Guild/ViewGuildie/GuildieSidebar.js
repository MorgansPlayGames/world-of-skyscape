import React, { useState } from "react";

import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

function GuildieSidebar(props) {
  
  let selectedGuildie = props.selectedGuildie

  return (
    <div className="w-64 h-screen bg-white flex-initial">
      <Navigation
        // you can use your own router's api to get pathname
        activeItemId="/management/members"
        onSelect={({ itemId }) => {
          // maybe push to the route
          props.handleGuildieNav(itemId);
        }}
        items={[
          {
            title: selectedGuildie.name,
            itemId: "/stats",
          },
          {
            title: "Tasks",
            itemId: "/tasks",
            subNav: [
              {
                title: "Travel",
                itemId: "/tasks/travel"
              },
              {
                title: "Find Mobs",
                itemId: "/tasks/grind",
              },
            ],
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
