import * as yup from 'yup';

const SignupSchema = yup.object().shape({
    firstName: yup
    .string()
    .min(2, 'Must be at least 2 characters long.')
    .required('First Name is required.'),
    lastName: yup
    .string()
    .min(2, 'Must be at least 2 characters long.'),
    username: yup
    .string()
    .min(6, 'Must be at least 6 characters long.')
    .required('Username is required.'),
    email: yup
    .string()
    .email('Please enter a valid email.')
    .required('Email is required.'),
    password: yup
    .string()
    .min(8, 'Must be at least 8 characters long.')
    .required('Password is required.'),
});

export default SignupSchema;