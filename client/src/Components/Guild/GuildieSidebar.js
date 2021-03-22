import React from "react";

import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

function GuildieSidebar(props) {
  
  let guildNav = [
    {
      title: "Guildies Here",
      itemId: "/viewGuildie",
    },
    {
      title: "New Guildie",
      itemId: "/new",
    },
  ]

  return (
    
      <div className="w-64 h-screen bg-white flex-initial">
        <Navigation
          // you can use your own router's api to get pathname
          activeItemId="/management/members"
          onSelect={({ itemId }) => {
            // maybe push to the route
            console.log(itemId)
            props.handleNav(itemId)
          }}
          items={[
            {
              title: "Guild Name Here",
              itemId: "/main",
              
            },
            {
              title: "Guildies",
              itemId: "/viewAllGuildies",
              subNav: guildNav,
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
