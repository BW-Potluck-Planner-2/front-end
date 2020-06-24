import React, {useState, useEffect}  from 'react';
import './App.css';
// import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import * as yup from 'yup';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import loginSchema from './components/formSchemalogin';
import signupSchema from './components/formSchemaSignup';

import Login from "./components/login"
import Signup from "./components/signup"
import CreatePotluckForm from "./components/CreatePotluckForm"
import AddItemForm from "./components/AddItemForm"
import PotluckPage from "./components/PotluckPage"
import AddGuestForm from "./components/AddGuestForm"
import UpdatePotluckForm from "./components/UpdatePotluckForm"
import { axiosWithAuth } from './utils/axiosWithAuth';

const initialLoginValues = {
  email: '',
  password: '',
};

const initialSingupValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const initialLoginErrors = {
  email: '',
  password: '',
};

const initialSingupErrors = {
  firstName: '',
  email: '',
  password: '',
}

const initialMembers = [];

const initialDisabled = true;

function App(props) {
  const [login, setLogin] = useState(initialLoginValues);
  const [signup, setSignup] = useState(initialSingupValues);
  const [loginErrors, setLoginErrors] = useState(initialLoginErrors);
  const [signupErrors, setSignupErrors] = useState(initialSingupErrors);
  const [signupDisabled, setSignupDisabled] = useState(initialDisabled);
  const [loginDisabled, setLoginDisabled] = useState(initialDisabled);
  const [members, setMembers] = useState(initialMembers);

  const getMembers = () =>{
    axiosWithAuth()
    .get('https://potluck-plann3r.herokuapp.com/')
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

  const submitLoginInfo = e => {
    e.preventDefault();
    axiosWithAuth().post("/api.auth/login")
    .then(res => {
      console.log(res, "postLogin res ()()()()()()()")
      localStorage.setItem("token", response.data.payload)
      props.history.push("/potluckPage")
    })
    .catch(error => {
      console.log(error, "postLogin Error ()()()()()()")
    })

  }

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
      email: signup.email.trim(),
      password: signup.password.trim(),
      id: uuid(),
    };

    postMember(newMember);
  };

  const loginSubmit = (event) =>{
    event.preventDefault();

    const member = {
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
    <Router>
      <div className="App">
        <header className="App-header">
            <h1> Potlucky Potluck Planner</h1>
        </header>
        <div>
          <Link to="/potluckPage">Go To Potluck Page</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>          
        </div>

        <Switch>
          <Route exact path="/login"> <Login  values={login}
                                              onInputChange={loginInputChange}
                                              onSubmit={loginSubmit}
                                              disabled={loginDisabled}
                                              errors={loginErrors}/> </Route>

          <Route exact path="/register"><Signup values={signup}
                                              onInputChange={signupInputChange}
                                              onSubmit={signupSubmit}
                                              disabled={signupDisabled}
                                              errors={signupErrors}/></Route>

          <Route exact path="/potluckForm" component={CreatePotluckForm}/>
          <Route exact path="/itemForm" component={AddItemForm}/>
          <Route exact path="/guestForm" component={AddGuestForm}/>
          <Route exact path="/potluckPage" component={PotluckPage}/>  
          <Route exact path="/updateForm" component={UpdatePotluckForm}/>         
        </Switch>
      </div>      
    </Router>

  );
}

export default App;
