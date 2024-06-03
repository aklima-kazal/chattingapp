import React, { useState } from "react";
import "./style.css";
import Sidebaricons from "./Sidebaricons";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { signOut, getAuth } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Loginusers } from "../../feature/slice/userSlice";
import Modals from "../Modal";

const Sidebar = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((users) => users.login.loggedIn);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const handleLogout = () => {
    signOut(auth).then(() => {
      localStorage.removeItem("users");
      dispatch(Loginusers(null));
      navigate("/login");
    });
  };

  return (
    <>
      <div className="side_bar">
        <div className="sidebar_wraper">
          <div className="profile_details">
            <div className="profile">
              <div className="profile_picture" onClick={handleOpen}>
                <picture>
                  <img src="/assets/profilePicture.jpg" alt="profilepic" />
                </picture>
                <div className="profile_overlay">
                  <AiOutlineCloudUpload />
                </div>
              </div>
            </div>

            <div className="user_name">
              <h5>{user.displayName}</h5>
            </div>
          </div>

          <div className="profile_icons">
            <Sidebaricons />
          </div>
        </div>
        <div className="logout_icon" onClick={handleLogout}>
          <RiLogoutBoxRLine />
        </div>
      </div>

      <Modals open={open} setOpen={setOpen} />
    </>
  );
};

export default Sidebar;
