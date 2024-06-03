import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsGear } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function Sidebaricons() {
  return (
    <div className="home_icon">
      <div className="icons">
        <NavLink className="profile_icons" to="/">
          <IoHomeOutline />
        </NavLink>
        <div className="profile_icons">
          <IoChatbubbleEllipsesOutline />
        </div>
        <div className="profile_icons">
          <IoNotificationsOutline />
        </div>
        <div className="profile_icons">
          <BsGear />
        </div>
      </div>
    </div>
  );
}

export default Sidebaricons;
