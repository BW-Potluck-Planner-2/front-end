import React from 'react';

const Login = (props) =>{
    const {
        values,
        onInputChange,
        onSubmit,
        disabled,
        errors,
    } = props

    return (
        <div className='login'>
            <form onSubmit={onSubmit}>
                <h2>Login Information</h2>
                <label>User Name:<br/>
                <p className='error'>{errors.username}</p>
                    <input
                    value={values.username}
                    onChange={onInputChange}
                    name='username'
                    type='text'
                    placeholder='User Name'
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
            </form>
        </div>
    )
};

export default Login;