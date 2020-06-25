import React from 'react';
import {Link} from 'react-router-dom';
import Styles from './styledcomponets';

const Signup = (props) =>{
    const {
        values,
        onInputChange,
        submitSignupInfo,
        disabled,
        errors,
    } = props
console.log(props, "0000000000000000")
    return (
        <Styles>
            <form onSubmit={submitSignupInfo}>
                <h2>Sign Up Information</h2>
                <p className='error'>{errors.firstName}</p>
                <label>First Name:
                    <input
                    value={values.firstName}
                    onChange={onInputChange}
                    name='firstName'
                    type='text'
                    placeholder='First Name'
                    />
                </label><br/>
                <p className='error'>{errors.lastName}</p>
                <label>Last Name:
                    <input
                    value={values.lastName}
                    onChange={onInputChange}
                    name='lastName'
                    type='text'
                    placeholder='Last Name'
                    />
                </label><br/>
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
                    <Link to="login">
                        <button disabled={disabled} className='submit'>Submit</button>
                    </Link>
                    
                    <Link to='/login'><button>Already have an account?</button></Link>
                </div>
            </form>
        </Styles>
    )
};

export default Signup;