import React, {useState, useEffect} from 'react';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import loginSchema from './components/formSchemalogin';
import signupSchema from './components/formSchemaSignup';
import * as yup from 'yup';
import axios from 'axios';

const initialLoginValues = {
  username: '',
  email: '',
  password: '',
};

const initialSingupValues = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  rptPassword: '',
};

const initialLoginErrors = {
  username: '',
  email: '',
  password: '',
};

const initialSingupErrors = {
  firstName: '',
  username: '',
  email: '',
  password: '',
  rptPassword: '',
}

const initialMembers = [];

const initialDisabled = true;

function App() {
  const [login, setLogin] = useState(initialLoginValues);
  const [signup, setSignup] = useState(initialSingupValues);
  const [loginErrors, setLoginErrors] = useState(initialLoginErrors);
  const [signupErrors, setSignupErrors] = useState(initialSingupErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [members, setMembers] = useState(initialMembers);

  const getMembers = () =>{
    axios.get('')
      .then(response =>{
        setMembers(response)
      })
      .catch(error =>{
        debugger
      })
  };

  const postMember = (member) =>{
    axios.post('', member)
      .then(response =>{
        setMembers([...members, response])
      })
      .catch(error =>{
        debugger
      })
      .finally(() =>{
        setSignup(initialSingupValues)
      })
  };

  const signupInputChange = (event) =>{
    const {name, value} = event.target;

    yup
      .reach(signupSchema, name)
      .validate(value)
      .then(response =>{
        setSignupErrors({
          ...signupErrors,
          [name]: ''
        });
      })
      .catch(error =>{
        setSignupErrors({
          ...signupErrors,
          [name]: error.errors[0]
        });
      });

    setSignup({
      ...signup,
      [name]: value
    });
  };

  const loginInputChange = (event) =>{
    const {name, value} = event.target;
    
    yup
      .reach(loginSchema, name)
      .validate(value)
      .then(response =>{
        setLoginErrors({
          ...loginErrors,
          [name]: ''
        });
      })
      .catch(error =>{
        setLoginErrors({
          ...loginErrors,
          [name]: error.errors[0]
        });
      });

    setLogin({
      ...login,
      [name]: value
    });
  };

  const signupSubmit = (event) =>{
    evt.preventDefault();

    const newMember = {
      firstName: signup.firstName.trim(),
      lastName: signup.lastName.trim(),
      username: signup.username.trim(),
      email: signup.email.trim(),
      password: signup.password.trim(),
      rptPassword: signup.rptPassword.trim(),
    };

    postMember(newMember);
  };

  useEffect(() =>{
    signupSchema.isValid(signup).then(valid =>{
      setDisabled(!valid)
    });
  }, [signup]);

  useEffect(() =>{
    loginSchema.isValid(login).then(valid =>{
      setDisabled(!valid)
    });
  }, [login]);

  return (
    <div className="App">
    </div>
  );
}

export default App;