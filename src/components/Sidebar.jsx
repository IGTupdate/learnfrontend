import React, { useState } from "react";
import "./Sidebar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import SidebarItem from "./SidebarItem";
import items from "../data/sidebar.json";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
    <i onClick={() => setSidebarOpen(!sidebarOpen)} className="bi-list"></i>
    {sidebarOpen &&
    <div className="sidebar">
    <div className="title__wrapper">
      <h1 className="course__title">ROADMAP</h1>
    </div>

    {items.map((item, index) => (
      <SidebarItem key={index} item={item} />
    ))}
  </div>
    }
      
    </>
  );
};

export default Sidebar;
