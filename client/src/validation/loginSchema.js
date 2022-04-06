import * as yup from "yup";

const LoginSchema = yup.object().shape({
  username: yup.string().trim().required("Username is require"),
  password: yup.string().trim().required("Password is require"),
});

export default LoginSchema;
