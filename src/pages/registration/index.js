import React from "react";
import "./style.css";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Signup from "../svg/signup";
import Forms from "./Forms";

const Registration = () => {
  return (
    <>
      <div>
        <div className="registration ">
          <Container fixed>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item xs={5.6}>
                <Forms />
              </Grid>
              <Grid item xs={6}>
                <Signup />
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Registration;
