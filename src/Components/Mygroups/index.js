import React from "react";
import "./style.css";
import { FcSearch } from "react-icons/fc";
import Button from "@mui/material/Button";

const Mygroups = () => {
  return (
    <>
      <div className="my_groups">
        <div className="my_groups_header">
          <h2>My Groups</h2>
          <div className="my_groups_searchBox">
            <FcSearch />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="my_groups_body">
          <div className="my_groups_wrapper">
            <div className="my_groups_img">
              <img src="/assets/avater.png" alt="avater" />
            </div>
            <div className="my_groups_titles">
              <h3>akhi noor</h3>
            </div>
            <div className="my_groups_dates">
              <p>Created At</p>
              <span>20/08/2023</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mygroups;
