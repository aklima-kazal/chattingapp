import React, { useState } from "react";
import "./style.css";
import Button from "@mui/material/Button";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const Forgotpass = () => {
  const [email, setEmail] = useState("");
  const auth = getAuth();
  const handleForgotpass = () => {};

  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

  return (
    <>
      <div className="forgotpass_body">
        <div className="forgotpass_box">
          <h3>Reset Your Password Via Email</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at
            magnam laboriosam qui laborum alias, fugiat est culpa perferendis
            aliquid.
          </p>
          <div className="email_box">
            <input
              type="email"
              placeholder="please enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button variant="contained" onClick={handleForgotpass}>
              SUBMIT
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgotpass;
