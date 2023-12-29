import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { signUp } from "../../validation/Validation";

const Forms = () => {
  let initialvalues = {
    email: "",
    fullname: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialvalues,
    validationSchema: signUp,
    onSubmit: () => {
      console.log("adddd");
    },
  });
  console.log(formik.values);
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
            value={formik.values.email}
            name="email"
            margin="normal"
          />
          {formik.errors.email && <p>formik.errors.email</p>}
          <TextField
            type="text"
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.fullname}
            name="fullname"
            margin="normal"
          />
          {formik.errors.fullname && <p>formik.errors.fullname</p>}
          <TextField
            type="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.password}
            name="password"
            margin="normal"
          />
          {formik.errors.password && <p>formik.errors.password</p>}
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
