import React from "react";  
import '../styles/login.css';
import { useState } from "react";
import{useNavigate} from 'react-router-dom';
import logo from '../images/logo.png';
//import axios from "axios";

function Login() {
    // const [username, setUsername] = useState("");
    // const[password, setPassword] = useState("");
    // const navigate= useNavigate();
    // const submit= async (e)=>{
    //     e.preventDefault();
    //     try{
    //         const response= await axios.post("http://localhost:5000/login", {
    //           nameOrEmail: username,
    //           passwordHash: password,
    //         });
    //         console.log(response.data);
    //         if(response.data.success){
    //             alert("Login successful!");
    //             navigate('/home');
    //         }
    //     } catch(error){
    //         console.error("There was an error!", error);
    //         alert("Login failed. Please try again.");
//}
return(
    <div className="login-main-container">
        <div className="row">
            <div className="col-lg7" id="login-left">
                
                    <img src={logo} alt="" />
            </div>
            <div className="main-text">
                <h1>
                    <span className="main">Hello IslandGuide</span>
                    <br /><span>SRI </span> LANKA 
                    </h1>
                <p>Explore the beauty of the islands with us.
                Embrace the excitement of your upcoming island escape and immerse yourself in the
                 unique experiences that await you on this enchanting island treasure
                </p>
                </div>
    </div>
    <div class="col-sm-12 col-md-12 col-lg-5">
            <div className="login">
            <form className='login-form'>
                <div class="form-group">
                    <label for="username">Username or Email</label>
                    <input
                        type="text"
                        class="form-control"
                        id="username"
                        aria-describedby="emailHelp"
                        placeholder="Enter Username or Email"
                        // onChange={(e) => {setUsername(e.target.value)}}
                         />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input
                        type="password"
                        class="form-control"
                        id="password"
                        placeholder="Password"
                        onChange={(e) => {setPassword(e.target.value)}} />
                </div>
                <div class="form-group account">
                    <p>Don't have an account? <a href="/register">Sign Up</a></p>
                    </div>
                <button type="submit" class="btn btn-primary">Login</button>
</form>
</div>
</div>  
</div>

)
}

export default Login;