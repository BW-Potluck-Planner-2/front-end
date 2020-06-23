import React, {useState, useEffect} from 'react';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';

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
    
  }

  return (
    <div className="App">
    </div>
  );
}

export default App;