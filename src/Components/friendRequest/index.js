import React from "react";
import "./style.css";
import { FcSearch } from "react-icons/fc";
import Button from "@mui/material/Button";

const FriendRequest = () => {
  return (
    <>
      <div className="friend_requestlist">
        <div className="friend_requestlist_header">
          <h2>Friend Request</h2>
          <div className="friend_requestlist_searchBox">
            <FcSearch />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="friend_requestlist_body">
          <div className="friend_requestlist_wrapper">
            <div className="friend_requestlist_img">
              <img src="/assets/avater.png" alt="avater" />
            </div>
            <div className="friend_requestlist_titles">
              <h3>akhi noor</h3>
            </div>
            <div className="friend_requestlist_join">
              <Button variant="outlined" color="success">
                ACCEPT
              </Button>
              <Button variant="outlined" color="error">
                REJECT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendRequest;
