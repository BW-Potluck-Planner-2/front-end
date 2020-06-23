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
            <form>
                <label>User Name:<br/>
                    <input/>
                </label>
                <label>Email:<br/>
                    <input/>
                </label>Password:<br/>
                <label>
                    <input/>
                </label>
            </form>
        </div>
    )
};

export default Login;