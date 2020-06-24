import React, {useState, useEffect}  from 'react';
import './App.css';
// import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


// import Login from "./components/Login"
// import Signup from "./components/Login"
// import CreatePotluck from "./components/CreatePotluck"
import CreatePotluckForm from "./components/CreatePotluckForm"
import AddItemForm from "./components/AddItemForm"
import PotluckPage from "./components/PotluckPage"
import AddGuestForm from "./components/AddGuestForm"
import UpdatePotluckForm from "./components/UpdatePotluckForm"


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
            <h1> Unit 3 build week</h1>
        </header>
        <Link to="/potluckPage">Go To Potluck Page</Link>
        <Switch>

          {/* <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/> */}
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
