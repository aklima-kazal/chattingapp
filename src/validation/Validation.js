import * as Yup from "yup";

export const signUp = Yup.object({
  email: Yup.string().email().required("Please,Enter your email"),
  fullname: Yup.string().min(3).max(15).required("Please,Enter your fullname"),
  password: Yup.string().min(3).required("Please,Enter your password"),
});

export const signIn = Yup.object({
  email: Yup.string().email().required("Please,Enter your email"),
  password: Yup.string().min(3).required("Please,Enter your password"),
});
