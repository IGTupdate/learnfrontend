import React, { useState } from "react";
import "./Sidebar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import SidebarItem from "./SidebarItem";
import items from "../data/sidebar.json";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleAnimation = () => {
    if (sidebarOpen) {
      document.querySelector('.sidebar').style.animation = "reversesideAnimation 2s "
      setSidebarOpen(false)
    }
  }

  return (
    <>
      {sidebarOpen ? (
                <i onClick={() => handleAnimation()} className="bi-x-lg"></i>
      ) : (
        <i onClick={() => setSidebarOpen(!sidebarOpen)} className="bi-list"></i>
      )}
      {sidebarOpen && (
        <div className="sidebar">
          <div className="title__wrapper">
            <a href="/" className="course__title">ROADMAP</a>
          </div>

          {items.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default Sidebar;
