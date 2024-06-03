import React from "react";
import "./style.css";
import { FcSearch } from "react-icons/fc";
import Button from "@mui/material/Button";

const Grouplist = () => {
  return (
    <>
      <div className="grouplist">
        <div className="grouplist_header">
          <h2>Group List</h2>
          <div className="grouplist_searchBox">
            <FcSearch />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="grouplist_body">
          <div className="grouplist_wrapper">
            <div className="grouplist_img">
              <img src="/assets/avater.png" alt="avater" />
            </div>
            <div className="grouplist_titles">
              <h3>MERN soilder</h3>
              <span>think twice code once!</span>
            </div>
            <div className="grouplist_join">
              <Button variant="outlined">JOIN</Button>
            </div>
          </div>
          <div className="grouplist_wrapper">
            <div className="grouplist_img">
              <img src="/assets/avater.png" alt="avater" />
            </div>
            <div className="grouplist_titles">
              <h3>MERN soilder</h3>
              <span>think twice code once!</span>
            </div>
            <div className="grouplist_join">
              <Button variant="outlined">JOIN</Button>
            </div>
          </div>
          <div className="grouplist_wrapper">
            <div className="grouplist_img">
              <img src="/assets/avater.png" alt="avater" />
            </div>
            <div className="grouplist_titles">
              <h3>MERN soilder</h3>
              <span>think twice code once!</span>
            </div>
            <div className="grouplist_join">
              <Button variant="outlined">JOIN</Button>
            </div>
          </div>
          <div className="grouplist_wrapper">
            <div className="grouplist_img">
              <img src="/assets/avater.png" alt="avater" />
            </div>
            <div className="grouplist_titles">
              <h3>MERN soilder</h3>
              <span>think twice code once!</span>
            </div>
            <div className="grouplist_join">
              <Button variant="outlined">JOIN</Button>
            </div>
          </div>
          <div className="grouplist_wrapper">
            <div className="grouplist_img">
              <img src="/assets/avater.png" alt="avater" />
            </div>
            <div className="grouplist_titles">
              <h3>MERN soilder</h3>
              <span>think twice code once!</span>
            </div>
            <div className="grouplist_join">
              <Button variant="outlined">JOIN</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grouplist;
