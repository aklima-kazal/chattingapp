import React from "react";
import "./style.css";
import { FcSearch } from "react-icons/fc";
import Button from "@mui/material/Button";

const Blockedusers = () => {
  return (
    <>
      <div className="blocked_users">
        <div className="blocked_users_header">
          <h2>Blocked Users</h2>
          <div className="blocked_users_searchBox">
            <FcSearch />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="blocked_users_body">
          <div className="blocked_users_wrapper">
            <div className="blocked_users_img">
              <img src="/assets/avater.png" alt="avater" />
            </div>
            <div className="blocked_users_titles">
              <h3>akhi noor</h3>
            </div>
            <div className="blocked_users_join">
              <Button variant="outlined" color="success">
                UNBLOCK
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blockedusers;
