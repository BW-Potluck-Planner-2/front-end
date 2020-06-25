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
import PrivateRoute from "./utils/PrivateRoute";

const initialLoginValues = {
  email: '',
  password: '',
};

const initialSignupValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const initialLoginErrors = {
  email: '',
  password: '',
};

const initialSignupErrors = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
}

const initialMembers = [];

const initialDisabled = true;

function App(props) {
  const [login, setLogin] = useState(initialLoginValues);
  console.log(login, " login Info {}{}{}{}{}{}|{}|")
  const [signup, setSignup] = useState(initialSignupValues);
  console.log(signup, " SIGN UP Info {}{}{}{}{}{}|{}|")
  const [loginErrors, setLoginErrors] = useState(initialLoginErrors);
  const [signupErrors, setSignupErrors] = useState(initialSignupErrors);
  const [signupDisabled, setSignupDisabled] = useState(initialDisabled);
  const [loginDisabled, setLoginDisabled] = useState(initialDisabled);
  const [members, setMembers] = useState(initialMembers);

  // const getMembers = () =>{
  //   axiosWithAuth()
  //   .get('https://potluck-plann3r.herokuapp.com/')
  //     .then(response =>{
  //       setMembers([...members, response.data])
  //     })
  //     .catch(error =>{
  //       debugger
  //     })
  // };

  // const postMember = (member) =>{
  //   axios.post('https://potluck-plann3r.herokuapp.com/', member)
  //     .then(response =>{
  //       setMembers([...members, response.data])
  //     })
  //     .catch(error =>{
  //       debugger
  //     })
  //     .finally(() =>{
  //       setSignup(initialSignupValues)
  //     })
  // };

  const submitSignupInfo = e => {
    e.preventDefault();
    axiosWithAuth()
    .post("/api/auth/register", signup)
    .then(res => {
      console.log(res, "postSignup Res ()()()()()()()()")
      localStorage.setItem("token", res.data.authToken)
      props.history.push("/login")
    })
    .catch(error => {
      console.log(error, "postSignup error ()()()()()()()()")
    }) 
  }

  const submitLoginInfo = e => {
    e.preventDefault();
    axiosWithAuth()
    .post("/api/auth/login", login)
    .then(res => {
      console.log(res, "postLogin res ()()()()()()()")
      localStorage.setItem("token", res.data.authToken)
      props.history.push("/potluckPage")
    })
    .catch(error => {
      console.log(error, "postLogin Error ()()()()()()")
    })
    setLogin(initialLoginValues)
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

  // const signupSubmit = (event) =>{
  //   event.preventDefault();

  //   const newMember = {
  //     firstName: signup.firstName.trim(),
  //     lastName: signup.lastName.trim(),
  //     email: signup.email.trim(),
  //     password: signup.password.trim(),
  //     id: uuid(),
  //   };

  //   postMember(newMember);
  // };

  // const loginSubmit = (event) =>{
  //   event.preventDefault();

  //   const member = {
  //     email: login.email.trim(),
  //     password: login.password.trim(),
  //   };

  //   getMembers(member);
  // };

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
                                              // onSubmit={loginSubmit}
                                              disabled={loginDisabled}
                                              errors={loginErrors}
                                              submitLoginInfo={submitLoginInfo}/> </Route>

          <Route exact path="/register"><Signup values={signup}
                                              onInputChange={signupInputChange}
                                              // onSubmit={signupSubmit}
                                              disabled={signupDisabled}
                                              errors={signupErrors}
                                              submitSignupInfo= {submitSignupInfo}/></Route>

          <PrivateRoute exact path="/potluckForm" component={CreatePotluckForm}/>
          <PrivateRoute exact path="/itemForm" component={AddItemForm}/>
          <PrivateRoute exact path="/guestForm" component={AddGuestForm}/>
          <PrivateRoute exact path="/potluckPage" component={PotluckPage}/>  
          <PrivateRoute exact path="/updateForm" component={UpdatePotluckForm}/>         
        </Switch>
      </div>      
    </Router>

  );
}

export default App;
