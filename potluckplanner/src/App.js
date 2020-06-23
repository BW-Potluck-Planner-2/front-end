import React, {useState, useEffect} from 'react';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import loginSchema from './components/formSchemalogin';
import signupSchema from './components/formSchemaSignup';
import * as yup from 'yup';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import {Switch, Route} from 'react-router-dom';

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
}

const initialMembers = [];

const initialDisabled = true;

function App() {
  const [login, setLogin] = useState(initialLoginValues);
  const [signup, setSignup] = useState(initialSingupValues);
  const [loginErrors, setLoginErrors] = useState(initialLoginErrors);
  const [signupErrors, setSignupErrors] = useState(initialSingupErrors);
  const [signupDisabled, setSignupDisabled] = useState(initialDisabled);
  const [loginDisabled, setLoginDisabled] = useState(initialDisabled);
  const [members, setMembers] = useState(initialMembers);

  const getMembers = () =>{
    axios.get('https://potluck-plann3r.herokuapp.com/')
      .then(response =>{
        setMembers([...members, response.data])
      })
      .catch(error =>{
        debugger
      })
  };

  const postMember = (member) =>{
    axios.post('https://potluck-plann3r.herokuapp.com/', member)
      .then(response =>{
        setMembers([...members, response.data])
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
    event.preventDefault();

    const newMember = {
      firstName: signup.firstName.trim(),
      lastName: signup.lastName.trim(),
      username: signup.username.trim(),
      email: signup.email.trim(),
      password: signup.password.trim(),
      id: uuid(),
    };

    postMember(newMember);
  };

  const loginSubmit = (event) =>{
    event.preventDefault();

    const member = {
      username: login.username.trim(),
      email: login.email.trim(),
      password: login.password.trim(),
    };

    getMembers(member);
  };

  useEffect(() =>{
    signupSchema.isValid(signup).then(valid =>{
      setSignupDisabled(!valid)
    });
  }, [signup]);

  useEffect(() =>{
    loginSchema.isValid(login).then(valid =>{
      setLoginDisabled(!valid)
    });
  }, [login]);

  return (
    <div className="App">
      <Switch>
        <Route exact path='/login'>
          <Login
            values={login}
            onInputChange={loginInputChange}
            onSubmit={loginSubmit}
            disabled={loginDisabled}
            errors={loginErrors}
          />
        </Route>
        <Route path='/'>
          <Signup
            values={signup}
            onInputChange={signupInputChange}
            onSubmit={signupSubmit}
            disabled={signupDisabled}
            errors={signupErrors}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;