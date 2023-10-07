import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [isLoginOpen, setIsLoginOpen] = useState(true);

  const toggleSlider = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  return (
    <div className="loginComponent">
      <div className={`login ${isLoginOpen ? '' : 'signUp'}`}>
        <input type="text" placeholder="Admin name" />
        <br />
        <input type="password" placeholder="Admin password" />
        <br />
        <button>Send</button>
        <div className="AnotherForSignUp">
          <h2>Welcome</h2>
          <br />
          <p>
            If you don't have an account click{' '}
            <button onClick={toggleSlider}>Sign Up</button>
          </p>
        </div>
      </div>
      <div className={`signUp ${isLoginOpen ? '' : 'login'}`}>
        <input type="text" placeholder="Admin name" />
        <br />
        <input type="password" placeholder="Admin password" />
        <br />
        <button>Send</button>
        <div className="AnotherPartForLogin">
          <h2>Welcome</h2>
          <br />
          <p>Please add your info</p>
          <br />
          <p>
            If you have an account, you can click for{' '}
            <button onClick={toggleSlider}>Login</button> to add your info
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
