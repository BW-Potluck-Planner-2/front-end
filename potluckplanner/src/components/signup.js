import React from 'react';
import {Link} from 'react-router-dom';

const Signup = (props) =>{
    const {
        values,
        onInputChange,
        onSubmit,
        disabled,
        errors,
    } = props

    return (
        <div className='signup'>
            <form onSubmit={onSubmit}>
                <h2>Sign Up Information</h2>
                <label>First Name:<br/>
                <p className='error'>{errors.firstName}</p>
                    <input
                    value={values.firstName}
                    onChange={onInputChange}
                    name='firstName'
                    type='text'
                    placeholder='First Name'
                    />
                </label><br/>
                <label>Last Name:<br/>
                <p></p>
                    <input
                    value={values.lastName}
                    onChange={onInputChange}
                    name='lastName'
                    type='text'
                    placeholder='Last Name'
                    />
                </label><br/>
                <label>Username:<br/>
                <p className='error'>{errors.username}</p>
                    <input
                    value={values.username}
                    onChange={onInputChange}
                    name='username'
                    type='text'
                    placeholder='Username'
                    />
                </label><br/>
                <label>Email:<br/>
                <p className='error'>{errors.email}</p>
                    <input
                    value={values.email}
                    onChange={onInputChange}
                    name='email'
                    type='email'
                    placeholder='Email'
                    />
                </label><br/>
                <label>Password:<br/>
                <p className='error'>{errors.password}</p>
                    <input
                    value={values.password}
                    onChange={onInputChange}
                    name='password'
                    type='password'
                    placeholder='Password'
                    />
                </label>
                <div>
                    <button disabled={disabled}>Submit</button>
                </div>
                <Link to='/login'>
                    <div>
                        <button>Already have an account?</button>
                    </div>
                </Link>
            </form>
        </div>
    )
};

export default Signup;