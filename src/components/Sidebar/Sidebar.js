import React, { useState, useEffect } from "react";

import SidebarOption from "../SidebarOption/SidebarOption";
import db from "../../firebase";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";

import { sidebarsData } from "./Sidebars.data";
import "./Sidebar.css";

function Sidebar() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Clever Programmer</h2>
          <h3>
            <FiberManualRecordIcon />
            Nicola A
          </h3>
        </div>
        <CreateIcon />
      </div>
      {sidebarsData.map((sidebarData) =>
        sidebarData.type === "line" ? (
          <hr />
        ) : (
          <SidebarOption Icon={sidebarData.Icon} title={sidebarData.title} />
        )
      )}
      {channels.map((channel) => (
        <SidebarOption title={channel.name} id={channel.id} />
      ))}
    </div>
  );
}

export default Sidebar;
