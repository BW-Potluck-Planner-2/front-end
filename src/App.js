import React, { useState, useEffect } from "react";
import "./App.css";
// import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import * as yup from "yup";
// import axios from 'axios';
// import { v4 as uuid } from 'uuid';
import loginSchema from "./components/formSchemalogin";
import signupSchema from "./components/formSchemaSignup";

import Login from "./components/login";
import Signup from "./components/signup";
import CreatePotluckForm from "./components/CreatePotluckForm";
import AddItemForm from "./components/AddItemForm";
import PotluckPage from "./components/PotluckPage";
import AddGuestForm from "./components/AddGuestForm";
import UpdatePotluckForm from "./components/UpdatePotluckForm";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import PrivateRoute from "./utils/PrivateRoute";
import Potluck from "./components/Potluck";

import Home from "./landingPageComponent/home.js";
import HowItWorks from "./landingPageComponent/howItWorks.js";
import Stories from "./landingPageComponent/stories.js";
import AboutUs from "./landingPageComponent/aboutUs.js";
import SuccessStories from "./landingPageComponent/successStories.js";

const initialLoginValues = {
  email: "",
  password: "",
};

const initialSignupValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const initialLoginErrors = {
  email: "",
  password: "",
};

const initialSignupErrors = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

// const initialMembers = [];

const initialDisabled = true;

function App(props) {
  // console.log(props, "kjhabgfsoiagdsoaqiguds")
  const [login, setLogin] = useState(initialLoginValues);
  // console.log(login, " login Info {}{}{}{}{}{}|{}|")

  const [signup, setSignup] = useState(initialSignupValues);
  // console.log(signup, " SIGN UP Info {}{}{}{}{}{}|{}|")

  const [loginErrors, setLoginErrors] = useState(initialLoginErrors);
  const [signupErrors, setSignupErrors] = useState(initialSignupErrors);
  const [signupDisabled, setSignupDisabled] = useState(initialDisabled);
  const [loginDisabled, setLoginDisabled] = useState(initialDisabled);
  // const [members, setMembers] = useState(initialMembers);

  const [potluckInfo, setPotluckInfo] = useState([]);
  console.log(potluckInfo, "Do We Have Potluck INfo here .........??????");

  useEffect(() => {
    axiosWithAuth()
      .get("/potlucks")
      .then((res) => {
        console.log(res, " APP res data potluckInfo.........");
        setPotluckInfo(res.data);
      })
      .catch((error) => {
        console.log(error, " APP error.........");
      });
  }, []);

  // let history = useHistory();

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

  const submitSignupInfo = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/auth/register", signup)
      .then((res) => {
        console.log(res, "postSignup Res ()()()()()()()()");
        // localStorage.setItem("token", res.data.authToken)
        props.history.push("/login");
      })
      .catch((error) => {
        console.log(error, "postSignup error ()()()()()()()()");
      });
  };

  const submitLoginInfo = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/auth/login", login)
      .then((res) => {
        console.log(res, "postLogin res ()()()()()()()");
        localStorage.setItem("token", res.data.authToken);
        window.location.assign("/potluckPage");
      })
      .catch((error) => {
        console.log(error.message, "postLogin Error ()()()()()()");
      });
    // setLogin(initialLoginValues)
  };

  const signupInputChange = (event) => {
    const { name, value } = event.target;

    yup
      .reach(signupSchema, name)
      .validate(value)
      .then((response) => {
        setSignupErrors({
          ...signupErrors,
          [name]: "",
        });
      })
      .catch((error) => {
        setSignupErrors({
          ...signupErrors,
          [name]: error.errors[0],
        });
      });

    setSignup({
      ...signup,
      [name]: value,
    });
  };

  const loginInputChange = (event) => {
    const { name, value } = event.target;

    yup
      .reach(loginSchema, name)
      .validate(value)
      .then((response) => {
        setLoginErrors({
          ...loginErrors,
          [name]: "",
        });
      })
      .catch((error) => {
        setLoginErrors({
          ...loginErrors,
          [name]: error.errors[0],
        });
      });

    setLogin({
      ...login,
      [name]: value,
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

  useEffect(() => {
    signupSchema.isValid(signup).then((valid) => {
      setSignupDisabled(!valid);
    });
  }, [signup]);

  useEffect(() => {
    loginSchema.isValid(login).then((valid) => {
      setLoginDisabled(!valid);
    });
  }, [login]);

  return (
    <Router>
      <div className="App">
        <header
          className="App-header"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <img
            src="https://images.unsplash.com/photo-1571559932711-cb498a7a1ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="crockpot logo"
          />
          <h1 style={{ fontSize: "5rem" }}> Potlucky Potluck Planner</h1>
        </header>
        <nav className="nav-landing2">
          <a
            className="b1 aTag"
            href="/"
            style={{ textDecoration: "none", color: "black" }}
          >
            Home
          </a>

          <a
            className="b2 aTag"
            href="/login"
            style={{ textDecoration: "none", color: "black" }}
          >
            Login
          </a>

          <a
            className="b3 aTag"
            href="/register"
            style={{ textDecoration: "none", color: "black" }}
          >
            Register
          </a>
          <a
            className="b4 aTag"
            href="/potluckPage"
            style={{ textDecoration: "none", color: "black" }}
          >
            Go To Potluck Page
          </a>

          <a
            className="b1 aTag"
            href="/aboutUs"
            style={{ textDecoration: "none", color: "black" }}
          >
            About Us
          </a>

          <a
            className="b2 aTag"
            href="/successStories"
            style={{ textDecoration: "none", color: "black" }}
          >
            Success Stories
          </a>

          <a
            className="b3 aTag"
            href="/stories"
            style={{ textDecoration: "none", color: "black" }}
          >
            Stories
          </a>

          <a
            className="b4 aTag"
            href="/howItWorks"
            style={{ textDecoration: "none", color: "black" }}
          >
            How It Works
          </a>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/howItWorks" component={HowItWorks} />
          <Route exact path="/stories" component={Stories} />
          <Route exact path="/aboutUs" component={AboutUs} />
          <Route exact path="/successStories" component={SuccessStories} />
          <Route
            exact
            path="/login"
            render={() => (
              <Login
                values={login}
                onInputChange={loginInputChange}
                disabled={loginDisabled}
                errors={loginErrors}
                submitLoginInfo={submitLoginInfo}
                {...props}
              />
            )}
          />

          <Route
            exact
            path="/register"
            render={() => (
              <Signup
                values={signup}
                onInputChange={signupInputChange}
                disabled={signupDisabled}
                errors={signupErrors}
                submitSignupInfo={submitSignupInfo}
              />
            )}
          />

          <Route exact path="/potluckForm" component={CreatePotluckForm} />
          <Route exact path="/itemForm" component={AddItemForm} />
          <Route exact path="/guestForm" component={AddGuestForm} />

          <Route exact path="/potluckPage" render={() => <PotluckPage />} />

          <Route
            exact
            path="/potluckPage/updateForm/:id"
            render={() => <UpdatePotluckForm setPotluckInfo={setPotluckInfo} />}
          />
          {/* <PrivateRoute exact path="/potluckPage/updateForm/:id"> <UpdatePotluckForm setPotluckInfo={setPotluckInfo} /></PrivateRoute> */}
          <Route
            exact
            Path="/potluckPage/:id"
            render={() => (
              <Potluck
                potluckInfo={potluckInfo}
                setPotluckInfo={setPotluckInfo}
              />
            )}
          />
          {/* <PrivateRoute exact Path="/potluckPage/:id"><Potluck {...props} potluckInfo={potluckInfo} setPotluckInfo={setPotluckInfo}/> </PrivateRoute> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

{
  /* <PrivateRoute exact path="/potluckPage" 
render ={() => <PotluckPage {...props} potluckInfo={potluckInfo} setPotluckInfo={setPotluckInfo}/>}/>

<PrivateRoute exact path="/potluckPage/updateForm/:id" 
    render={props => <UpdatePotluckForm setPotluckInfo={setPotluckInfo}/>}/>

<PrivateRoute exact Path="/potluckPage/:id" 
    render={() =><Potluck {...props} potluckInfo={potluckInfo} setPotluckInfo={setPotluckInfo}/>}/> */
}
