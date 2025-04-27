import React from "react";  
import '../styles/register.css';
import { useState, useEffect  } from "react";
import{useNavigate} from 'react-router-dom';
import axios from "axios";
import logo from '../images/logo.png';

function Register() {
    const [username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[cpassword, setCpassword] = useState("");

    const submit= async (e)=>{
        e.preventDefault();

        try{
            const response= await axios.post("http://localhost:5000/register", {
                nameOrEmail: username,
                passwordHash: password,
                cpasswordHash: cpassword,
            });
            console.log(response.data);
                if(response.data.success){
                    alert("Registration successful!");
                    navigate('/login');
                }
            } catch(error){
                console.error("There was an error!", error);
                alert("Registration failed. Please try again.");
            }
            
        }
    return(
        <div className="register-main-container">
            <div className="row">
                <div className="col-lg7" id="register-left">
                    <img src={logo} alt="" />
                    </div>
                    <div className="main-text">
                    <h1>
                        <span className="main">Welcome to IslandGuide</span>
                        <br /><span>SRI </span> LANKA 
                        </h1>
                    <p>Explore the beauty of the islands with us.
                    Embrace the excitement of your upcoming island escape and immerse yourself in the
                     unique experiences that await you on this enchanting island treasure
                    </p>
                    </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-5">
          <div className="register">
            <form className="register-form">
              <div className="form-group">
              <label htmlFor="username">Username or Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  aria-describedby="emailHelp"
                  placeholder="Enter Username or Email"
                  onChange={(e)=>{setUsername(e.target.value)}}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cpassword">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="cpassword"
                  placeholder="Confirm Password"
                  onChange={(e)=>{setCpassword(e.target.value)}}
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Remember me
                </label>
              </div>
              <div className="form-group account">
                <p>
                  Already have an account? <a href="">Sign in</a>
                </p>
              </div>
              <button type="submit" className="btn btn-primary" onClick={submit}>
                Submit
              </button>
            </form>
          </div>
        </div>

        </div>
    );
    }
    export default Register;
