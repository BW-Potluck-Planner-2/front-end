import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


// import Login from "./components/Login"
// import Signup from "./components/Login"
// import CreatePotluck from "./components/CreatePotluck"
import CreatePotluckForm from "./components/CreatePotluckForm"
import AddItemForm from "./components/AddItemForm"
import PotluckPage from "./components/PotluckPage"
 


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
            <h1> Unit 3 build week</h1>
        </header>
        <Switch>
          {/* <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/> */}
          <Route exact path="/potluckForm" component={CreatePotluckForm}/>
          <Route exact path="/itemForm" component={AddItemForm}/>

          <Route exact path="/potluckPage" component={PotluckPage}/>          
        </Switch>
      </div>      
    </Router>

  );
}

export default App;
