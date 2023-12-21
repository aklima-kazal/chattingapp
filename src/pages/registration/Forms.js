import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";

const Forms = () => {
  let initialvalues = {
    email: "",
    fullname: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialvalues,
    onSubmit: () => {
      console.log(formik);
    },
  });

  return (
    <>
      <div>
        <h1>Get started with easily register</h1>
        <h3>Free register and you can enjoy it</h3>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            type="email"
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            fullWidth
            onChange={formik.handleChange}
            name="email"
            margin="normal"
          />
          <TextField
            type="text"
            id="outlined-basic"
            label="Full name"
            variant="outlined"
            fullWidth
            onChange={formik.handleChange}
            name="fullname"
            margin="normal"
          />
          <TextField
            type="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            fullWidth
            onChange={formik.handleChange}
            name="password"
            margin="normal"
          />
        </form>
        <div className="reg_btn">
          <Button type="submit" variant="contained" fullWidth>
            Sign up
          </Button>
        </div>

        <p>
          Already have an account ? <span>Sign In</span>
        </p>
      </div>
    </>
  );
};

export default Forms;
