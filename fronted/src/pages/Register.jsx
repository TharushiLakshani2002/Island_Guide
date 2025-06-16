import React from 'react';
import '../styles/register.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../images/logo.png';

function Register() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    cpassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username or email is required';
    } else if (formData.username.includes('@') && !/\S+@\S+\.\S+/.test(formData.username)) {
      newErrors.username = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!formData.cpassword) {
      newErrors.cpassword = 'Please confirm your password';
    } else if (formData.password !== formData.cpassword) {
      newErrors.cpassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await axios.post("http://localhost:3001/api/v1/users", {
        nameOrEmail: formData.username,
        passwordHash: formData.password,
        cpasswordHash: formData.cpassword // Include confirm password for backend validation
      });
      
      console.log('Response:', response.data);
      
      if (response.data.success) {
        alert("Registration successful!");
        navigate('/login');
      } else {
        alert(response.data.message || "Registration failed.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else if (error.response?.status === 409) {
        alert("Username or email already exists.");
      } else if (error.response?.status === 400) {
        alert(error.response?.data?.message || "Invalid input data.");
      } else {
        alert("Registration failed. Please check your internet connection and try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register-main-container">
      <div className="row">
        <div className="col-lg-7">
          <div className="logo">
            <img src={logo} alt="Company Logo"/>
          </div>
          <div className="main-text">
            <h1>
              <span className="main">Welcome!</span>
              <br /> <span>SRI</span> LANKA
            </h1>
            <p>
              Discover the anticipation of your upcoming island retreat and
              indulge in the distinct adventures that this island gem has in
              store for you.
            </p>
          </div>
        </div>
        
        <div className="col-sm-12 col-md-12 col-lg-5">
          <div className="register">
            <form className="register-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username or Email</label>
                <input
                  type="text"
                  className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                  id="username"
                  name="username"
                  placeholder="Enter Username or Email"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
                {errors.username && (
                  <div className="invalid-feedback">{errors.username}</div>
                )}
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>
              
              <div className="form-group">
                <label htmlFor="cpassword">Confirm Password</label>
                <input
                  type="password"
                  className={`form-control ${errors.cpassword ? 'is-invalid' : ''}`}
                  id="cpassword"
                  name="cpassword"
                  placeholder="Confirm Password"
                  value={formData.cpassword}
                  onChange={handleInputChange}
                  required
                />
                {errors.cpassword && (
                  <div className="invalid-feedback">{errors.cpassword}</div>
                )}
              </div>
              
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberMe"
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              
              <div className="form-group account">
                <p>
                  Already have an account? <a href="/login">Sign in</a>
                </p>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary" 
                disabled={isLoading}
              >
                {isLoading ? 'Registering...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;