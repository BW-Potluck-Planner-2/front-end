import * as yup from "yup";

const LoginSchema = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password."),
});

export default LoginSchema;
