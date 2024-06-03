import React from "react";
import "./style.css";
import { FcSearch } from "react-icons/fc";
import Button from "@mui/material/Button";

const Friends = () => {
  return (
    <>
      <div className="friends_list">
        <div className="friends_list_header">
          <h2>Friends</h2>
          <div className="friends_list_searchBox">
            <FcSearch />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="friends_list_body">
          <div className="friends_list_wrapper">
            <div className="friends_list_img">
              <img src="/assets/avater.png" alt="avater" />
            </div>
            <div className="friends_list_titles">
              <h3>akhi noor</h3>
            </div>
            <div className="friends_list_join">
              <Button variant="outlined" color="error">
                BLOCK
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Friends;
