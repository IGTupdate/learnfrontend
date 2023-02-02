import React, { useState } from "react";
import './Sidebar.css'


const SidebarItem = ({item}) => {
    const [open, setOpen] = useState(false) 


  return (
    <div className={open ? "sidebar__item open" : "sidebar__open"}>
      <div className="sidebar__title">
        <span>
          <i className={item.icon}></i>
          {item.title}
        </span>
        <i className="bi-chevron-down toggle__btn" onClick={() => setOpen(!open)}></i>
      </div>
      <div className="sidebar__content">
      { item.childrens.map((child, index) => (
      <a className="content__link" href={child.path} key={index}>{child.title}</a>
      )) }
      </div>
    </div>
  );
};

export default SidebarItem;
