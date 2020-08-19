import React from "react";

import SidebarOption from "../SidebarOption/SidebarOption";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";

import { sidebarsData } from "./Sidebars.data";
import "./Sidebar.css";

function Sidebar() {
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
      {sidebarsData.map((sidebarData) => (
        <SidebarOption Icon={sidebarData.Icon} title={sidebarData.title} />
      ))}
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} title="Add Channels" />
    </div>
  );
}

export default Sidebar;
