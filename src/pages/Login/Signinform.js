// import React, { useState } from "react";
// import { Button, TextField } from "@mui/material";
// import { useFormik } from "formik";
// import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { ImEyeBlocked, ImEye } from "react-icons/im";
// import { RingLoader } from "react-spinners";
// import { signIn } from "../../validation/Validation";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// const Signinform = () => {
//   const [passwordShow, setPasswordShow] = useState("password");
//   const [loading, setLoading] = useState(false);
//   const auth = getAuth();

//   let initialvalues = {
//     email: "",
//     password: "",
//   };
//   const handlePassShow = () => {
//     if (passwordShow === "password") {
//       setPasswordShow("text");
//     } else {
//       setPasswordShow("password");
//     }
//   };

//   const formik = useFormik({
//     initialValues: initialvalues,
//     validationSchema: signIn,
//     onSubmit: async () => {
//       // creatUsers();
//       Signinuser();
//       setLoading();
//     },
//   });
//   const Signinuser = () => {
//     signInWithEmailAndPassword(
//       auth,
//       formik.values.email,
//       formik.values.password
//     )
//       .then(() => {
//         console.log("hello");
//       })
//       .catch((error) => {
//         if (error.message.includes("auth/wrong-password")) {
//           toast.error("Wrong password", {
//             position: "bottom-center",
//             autoClose: 1000,
//             hideProgressBar: true,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: false,
//             progress: undefined,
//             theme: "dark",
//           });
//         }
//       });
//   };

//   return (
//     <>
//       <div>
//         <h1>Login To Start Journey With Us </h1>

//         <ToastContainer />
//         <form onSubmit={formik.handleSubmit}>
//           <TextField
//             type="email"
//             id="outlined-basic"
//             label="Email Address"
//             variant="outlined"
//             fullWidth
//             onChange={formik.handleChange}
//             value={formik.values.email}
//             name="email"
//             margin="normal"
//           />
//           {formik.errors.email && formik.touched.email && (
//             <p className="error">{formik.errors.email}</p>
//           )}

//           <div className="password_field">
//             <TextField
//               type={passwordShow}
//               id="outlined-basic"
//               label="Password"
//               variant="outlined"
//               fullWidth
//               onChange={formik.handleChange}
//               value={formik.values.password}
//               name="password"
//               margin="normal"
//             />
//             <div className="eye_off" onClick={handlePassShow}>
//               {passwordShow === "password" ? <ImEyeBlocked /> : <ImEye />}
//             </div>
//           </div>

//           {formik.errors.password && formik.touched.password && (
//             <p className="signin_error">{formik.errors.password}</p>
//           )}
//         </form>
//         <div className="forget">
//           <span>Forget Password </span>
//         </div>
//         <div className="signin_btn">
//           {loading ? (
//             <Button
//               type="submit"
//               variant="contained"
//               disabled
//               onClick={formik.handleSubmit}
//               fullWidth
//             >
//               <RingLoader color="#ffff" size={25} />
//             </Button>
//           ) : (
//             <Button
//               type="submit"
//               variant="contained"
//               onClick={formik.handleSubmit}
//               fullWidth
//             >
//               Log In
//             </Button>
//           )}
//         </div>
//         <p className="signin_auth">
//           Don't have an account ? <Link to="/">Sign Up</Link>
//         </p>
//       </div>
//     </>
//   );
// };

// export default Signinform;
import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ImEyeBlocked, ImEye } from "react-icons/im";
import { RingLoader } from "react-spinners";
import { signIn } from "../../validation/Validation";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Signinform = () => {
  const [passwordShow, setPasswordShow] = useState("password");
  const [loading, setLoading] = useState(false);
  const auth = getAuth();

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
      signInUser();
    },
  });
  const signInUser = () => {
    setLoading(true);
    signInWithEmailAndPassword(
      auth,
      formik.values.email,
      formik.values.password
    )
      .then(({ user }) => {
        console.log(user);
        if (user) {
          toast.success("account login", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setLoading(false);
        } else {
          toast.error("please verify your email address", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setLoading(false);
        }
      })
      .catch((error) => {
        if (error.message.includes("auth/invalid-email")) {
          toast.error("invalid email address", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else if (error.message.includes("auth/user-not-found")) {
          toast.error("user not found", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else if (error.message.includes("auth/wrong-password")) {
          toast.error("wrong password", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
        setLoading(false);
      });
  };

  return (
    <>
      <div>
        <ToastContainer />
        <h1>Login To Start Journey With Us </h1>

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
          <span>Forget Password </span>
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
          Don't have an account ? <Link to="/">Sign Up</Link>
        </p>
      </div>
    </>
  );
};

export default Signinform;
