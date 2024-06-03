import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ImEyeBlocked, ImEye } from "react-icons/im";
import { RingLoader } from "react-spinners";
import { signIn } from "../../validation/Validation";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import Google from "../svg/google";
import Facebook from "../svg/facebook";
import Github from "../svg/github";
import { useDispatch } from "react-redux";
import { Loginusers } from "../../feature/slice/userSlice";

const Signinform = () => {
  const [passwordShow, setPasswordShow] = useState("password");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const auth = getAuth();
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const facebookprovider = new FacebookAuthProvider();
  const githubprovider = new GithubAuthProvider();

  let initialvalues = {
    email: "",
    password: "",
  };
  const handlePassShow = () => {
    if (passwordShow === "password") {
      setPasswordShow("text");
    } else {
      setPasswordShow("password");
    }
  };

  const formik = useFormik({
    initialValues: initialvalues,
    validationSchema: signIn,
    onSubmit: () => {
      // creatUsers();
      Signinuser();
      setLoading();
    },
  });
  const Signinuser = () => {
    setLoading(true);
    signInWithEmailAndPassword(
      auth,
      formik.values.email,
      formik.values.password
    )
      .then(({ user }) => {
        if (user.emailVerified === true) {
          toast.success("login successful", {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "dark",
          });

          navigate("/");
          setLoading(false);
          dispatch(Loginusers(user));
          localStorage.setItem("users", JSON.stringify(user));
        } else {
          toast.error("varified your email", {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "dark",
          });
          setLoading(false);
        }
      })

      .catch((error) => {
        if (error.message.includes("auth/invalid-credential")) {
          toast.error("Wrong password", {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "dark",
          });
        } else if (error.message.includes("auth/user-not-found")) {
          toast.error("User Not Found", {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "dark",
          });
        }
      });
  };
  const handleGoogle = () => {
    signInWithPopup(auth, provider);
  };
  const handleFacebook = () => {
    signInWithPopup(auth, facebookprovider);
  };
  const handleGithub = () => {
    signInWithPopup(auth, githubprovider);
  };
  return (
    <>
      <div>
        <h1>Login To Start Journey With Us </h1>

        <ToastContainer />
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
          {formik.errors.email && formik.touched.email && (
            <p className="error">{formik.errors.email}</p>
          )}

          <div className="password_field">
            <TextField
              type={passwordShow}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.password}
              name="password"
              margin="normal"
            />
            <div className="eye_off" onClick={handlePassShow}>
              {passwordShow === "password" ? <ImEyeBlocked /> : <ImEye />}
            </div>
          </div>

          {formik.errors.password && formik.touched.password && (
            <p className="signin_error">{formik.errors.password}</p>
          )}
        </form>

        <div className="forget">
          <Link to="/forgotpassword">
            <span>Forget Password</span>
          </Link>
        </div>
        <div className="icons">
          <div className="google" onClick={handleGoogle}>
            <Google />
            <span>Login With Google</span>
          </div>
          <div className="facebook" onClick={handleFacebook}>
            <Facebook />
            <span>Login With Facebook</span>
          </div>
          <div className="github" onClick={handleGithub}>
            <Github />
            <span>Login With Github</span>
          </div>
        </div>
        <div className="signin_btn">
          {loading ? (
            <Button
              type="submit"
              variant="contained"
              disabled
              onClick={formik.handleSubmit}
              fullWidth
            >
              <RingLoader color="#ffff" size={25} />
            </Button>
          ) : (
            <Button
              type="submit"
              variant="contained"
              onClick={formik.handleSubmit}
              fullWidth
            >
              Log In
            </Button>
          )}
        </div>

        <p className="signin_auth">
          Don't have an account ?
          <Link to="/signup">
            <span>Sign In</span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Signinform;
