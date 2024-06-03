import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { signUp } from "../../validation/Validation";
import { ImEyeBlocked, ImEye } from "react-icons/im";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { RingLoader } from "react-spinners";
import { getDatabase, ref, set } from "firebase/database";

const Forms = () => {
  const [loading, setLoading] = useState(false);
  const [passwordShow, setPasswordShow] = useState("password");
  const auth = getAuth();
  const db = getDatabase();
  const navigate = useNavigate();
  let initialvalues = {
    email: "",
    fullname: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialvalues,
    validationSchema: signUp,
    onSubmit: () => {
      creatUsers();
    },
  });
  const creatUsers = () => {
    setLoading(true);
    createUserWithEmailAndPassword(
      auth,
      formik.values.email,
      formik.values.password
    )
      .then(({ user }) => {
        console.log(user);
        updateProfile(auth.currentUser, {
          displayName: formik.values.fullname,
        }).then(() => {
          setLoading(true);
          sendEmailVerification(auth.currentUser).then(() => {
            set(ref(db, "users/" + user.uid), {
              username: user.displayName,
              email: user.email,
            }).then(() => {
              toast.success(" Email Sent ", {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "dark",
              });
              setTimeout(() => {
                navigate("/login");
              }, 6500);
              setLoading(false);
            });
          });
        });
        // setLoading(true);
        // sendEmailVerification(auth.currentUser).then(() => {
        //   set(ref(db, "users/"), {
        //     username: formik.values.fullname,
        //     email: formik.values.email,
        //   });
        //   toast.success(" Email Sent ", {
        //     position: "bottom-center",
        //     autoClose: 1000,
        //     hideProgressBar: true,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: false,
        //     progress: undefined,
        //     theme: "dark",
        //   });
        // });

        // navigate("/login");
        // setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        if (error.message.includes(" Error (auth/email-already-in-use).")) {
          toast.error(" Email already in use ", {
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
        setLoading(false);
      });
  };
  const handlePassShow = () => {
    if (passwordShow === "password") {
      setPasswordShow("text");
    } else {
      setPasswordShow("password");
    }
  };
  return (
    <>
      <div>
        <h1>Get started with easily register</h1>
        <h3>Free register and you can enjoy it</h3>
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
          {formik.errors.fullname && formik.touched.fullname && (
            <p className="error">{formik.errors.fullname}</p>
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
            <p className="error">{formik.errors.password}</p>
          )}
        </form>
        <div className="reg_btn">
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
              Sign up
            </Button>
          )}
        </div>

        <p className="auth">
          Already have an account ? <Link to="/login">Sign Up</Link>
        </p>
      </div>
    </>
  );
};

export default Forms;
