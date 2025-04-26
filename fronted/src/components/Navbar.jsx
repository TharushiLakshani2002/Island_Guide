import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useState, useEffect } from 'react';
import logo from '../images/logo.png';
import '../styles/navbar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from 'react-router-dom';


function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  
  return (
    <div className='navbar-container'>
        <div className="row row1">
            <div className="col-9">
                <a href="#" className='icon'><EmailIcon/></a>
                <a href="#">islandguide@gmail.com</a>
            </div>
            <div className="col-3">
                <a href="#"><TwitterIcon/></a>
                <a href="#"><FacebookIcon/></a>
                <a href="#"><InstagramIcon/></a>
                <a href="#"><LinkedInIcon/></a>
            </div>
            
         </div>
        <div className="row row2">
            <div className="col-5">
               <img src={logo} alt="" />
            </div>
            <div className="col-6" id='links'>
                <a href="#"><Link to='/'>Home</Link></a>
                <a href="#"><Link to='/plan'>Plan Your Trip</Link></a>
                <a href="#"><Link to='/about'>About</Link></a>
                <a href="#">Contact Us</a>
            </div>
            <div className="col-1" id='user-icon'>
        <div className={`dropdown ${dropdownOpen ? 'show' : ''}`}>
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            onClick={toggleDropdown}
          >
            <AccountCircleIcon />
          </button>
          <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">My Profile</a>
            <a className="dropdown-item" href="#"><Link to='/logout'>Logout</Link></a>
          </div>
        </div>
      </div>
         </div>
    </div>
  )
}

export default Navbar