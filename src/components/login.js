import React from 'react';
import {Link} from 'react-router-dom';
import Styles from './styledcomponets';

const Login = (props) =>{
    const {
        values,
        onInputChange,
        // onSubmit,
        disabled,
        errors,
        submitLoginInfo,
    } = props

    return (
        <Styles>
            <form onSubmit={submitLoginInfo}>
                <h2>Login Information</h2>
                <p className='error'>{errors.email}</p>
                <label>Email:
                    <input
                    value={values.email}
                    onChange={onInputChange}
                    name='email'
                    type='email'
                    placeholder='Email'
                    />
                </label><br/>
                <p className='error'>{errors.password}</p>
                <label>Password:
                    <input
                    value={values.password}
                    onChange={onInputChange}
                    name='password'
                    type='password'
                    placeholder='Password'
                    />
                </label>
                <div className='bttn'>
                    {/* <Link to="/potluckPage">  */}
                    <button disabled={disabled} className='submit'>Submit</button>
                    {/* </Link> */}
                    <Link to='/register'><button>Need to Sign Up?</button></Link>
                </div>
            </form>
        </Styles>
    )
};

export default Login;