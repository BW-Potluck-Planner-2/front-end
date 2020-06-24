import React from 'react';
import {Link} from 'react-router-dom';
import Styles from './styledcomponets';

const Signup = (props) =>{
    const {
        values,
        onInputChange,
        onSubmit,
        disabled,
        errors,
    } = props

    return (
        <Styles>
            <form onSubmit={onSubmit}>
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
                <p></p>
                <label>Last Name:
                    <input
                    value={values.lastName}
                    onChange={onInputChange}
                    name='lastName'
                    type='text'
                    placeholder='Last Name'
                    />
                </label><br/>
                <p className='error'>{errors.username}</p>
                <label>Username:
                    <input
                    value={values.username}
                    onChange={onInputChange}
                    name='username'
                    type='text'
                    placeholder='Username'
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
                    <button disabled={disabled} className='submit'>Submit</button>
                    <Link to='/login'><button>Already have an account?</button></Link>
                </div>
            </form>
        </Styles>
    )
};

export default Signup;