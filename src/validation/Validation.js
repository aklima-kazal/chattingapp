import * as Yup from "yup";

export const signUp = Yup.object({
  fullname: Yup.string().min(3).max(8).required("name"),
  email: Yup.string().email().required("name"),
  password: Yup.string().min(3).required("name"),
});
