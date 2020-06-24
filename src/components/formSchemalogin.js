import * as yup from 'yup';

const LoginSchema = yup.object().shape({
    email: yup
    .string()
    .email('Please enter a valid email.'),
    password: yup
    .string()
    .required('Please enter your password.')
})

export default LoginSchema;