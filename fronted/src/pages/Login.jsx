import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/login.css';
import logo from '../images/logo.png';
import axios from 'axios';

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/api/v1/users/login", {
        nameOrEmail: username, 
        passwordHash: password,
       
      });
      setIsLoggedIn(true);

      
      console.log(response.data);
      navigate('/');
      
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  }

  return (
    <div className="login-main-container">
      <div className="row">
        <div className="col-lg-7" id="login-left">
          <img src={logo} alt="IslandGuide Logo" />
        </div>
        <div className="main-text">
          <h1>
            <span className="main">Hello IslandGuide</span>
            <br /><span>SRI</span> LANKA
          </h1>
          <p>
            Explore the beauty of the islands with us. Embrace the excitement of your
            upcoming island escape and immerse yourself in the unique experiences that await you on this enchanting island treasure.
          </p>
        </div>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-5">
        <div className="login">
          <form className="login-form" onSubmit={submit}>
            <div className="form-group">
              <label htmlFor="username">Username or Email</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter Username or Email"
                onChange={(e) => setUsername(e.target.value)}
                value={username} // Bind input to state
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password} // Bind input to state
              />
            </div>
            <div className="form-group account">
              <p>Don't have an account? <a href="/register">Sign Up</a></p>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
