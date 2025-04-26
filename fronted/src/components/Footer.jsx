import React from 'react'
import logo from '../images/logo.png';
import '../styles/footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
   
    <div className='footer-container'>
        <div className="row footer-links">
            <div className="col-3">
                <img src={logo} alt="" />
            </div>
            <div className="col-5 quick-links">
                <div className="list">
                <h6>Quick Links</h6>
                <ul>
                    <li><a href="#">Term of Use</a></li>
                    <li><a href="#">Site Map</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Subscribe</a></li>
                    <li><a href="#">Plan Your Trip</a></li>
                </ul>
                </div>
            </div>
            <div className="col-4 services">
                <div className="list">
                <h6>Our Services</h6>
                <ul>
                    <li><a href="#">Term of Use</a></li>
                    <li><a href="#">Site Map</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Subscribe</a></li>
                    <li><a href="#">Plan Your Trip</a></li>
                </ul>
                </div>
            </div>

        </div>
        <hr />
        <div className="row footer-copy">
                <a href="#"><TwitterIcon/></a>
                <a href="#"><FacebookIcon/></a>
                <a href="#"><InstagramIcon/></a>
                <a href="#"><LinkedInIcon/></a>

                
                
        </div>
        
        <p>© 2023 | All Rights Reserved by IslandGuide Team.</p>
    </div>
    
  )
}

export default Footer