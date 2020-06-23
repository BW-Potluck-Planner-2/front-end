import React from 'react';

const Signup = (props) =>{
    const {
        values,
        onInputChange,
        onSubmit,
        disabled,
        errors,
    } = props

    return (
        <div>
            <form>
                <label>First Name:<br/>
                    <input/>
                </label>
                <label>Last Name:<br/>
                    <input/>
                </label>
                <label>Username:<br/>
                    <input/>
                </label>
                <label>Email:<br/>
                    <input/>
                </label>
                <label>Password:<br/>
                    <input/>
                </label>
                <label>Repeat Password:<br/>
                    <input/>
                </label>
            </form>
        </div>
    )
};

export default Signup;