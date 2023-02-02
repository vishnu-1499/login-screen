import React, { useState } from 'react';
import { Login } from "./Login.js";
import { Register } from "./Register.js";
import logo from './logo.svg';
import './App.css';

function App() {

    const [ currentForm, setCurrentForm ] = useState("login");

    const toggleForm = (formName) => {
      setCurrentForm(formName);
    }

  return (
    <div className="App">
        {currentForm == "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />}
    </div>
  );
}

export default App;
