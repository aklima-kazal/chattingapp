import React from "react";
import Grid from "@mui/material/Grid";
import "./style.css";
import Grouplist from "../../Components/Grouplist";
import FriendRequest from "../../Components/friendRequest";
import Friends from "../../Components/Friends";
import Mygroups from "../../Components/Mygroups";
import Users from "../../Components/Users";
import Blockedusers from "../../Components/blockedUsers";

const Home = () => {
  return (
    <>
      <Grid container className="home_pages">
        <Grid item xs={4} className="home_items">
          <div>
            <Grouplist />
          </div>
          <div>
            <FriendRequest />
          </div>
        </Grid>
        <Grid item xs={4} className="home_items">
          <div>
            <Friends />
          </div>
          <div>
            <Mygroups />
          </div>
        </Grid>
        <Grid item xs={4} className="home_items">
          <div>
            <Users />
          </div>
          <div>
            <Blockedusers />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
