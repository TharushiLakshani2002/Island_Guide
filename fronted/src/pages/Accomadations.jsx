import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";  
import '../styles/accomadations.css';
import starIcon from '@mui/icons-material/Star';

function Accomadations() {
    return (
        <div className="accomadations-container">
        <Navbar/>
        <div className="accomadation-container1">
            <div className="row">
                <div className="row">
                    <div className="col-3">
                        <div className="image-container">
                        <img src="https://uploads-ssl.webflow.com/576fd5a8f192527e50a4b95c/5bfe53d5865bafeffd841e7e_98%20acres%20resort%20and%20spa-min.jpg" alt="" className="image"/>                    
                        <div className="text-overlay">
                        <div className="text-overlay">
                            <p>Luxury Resorts</p>
                        </div>
                </div>
                
                </div>
                </div>
                <div className="col-3">
                <div className="image-container">
                        <img src="https://uploads-ssl.webflow.com/576fd5a8f192527e50a4b95c/5bfe53d5865bafeffd841e7e_98%20acres%20resort%20and%20spa-min.jpg" alt="" className="image"/>                    
                        <div className="text-overlay">
                        <div className="text-overlay">
                            <p>Eco-Lodges & Nature Resorts</p>
                        </div>
                </div>
                </div>
                    
                </div>
                <div className="col-3">
                <div className="image-container">
                        <img src="https://uploads-ssl.webflow.com/576fd5a8f192527e50a4b95c/5bfe53d5865bafeffd841e7e_98%20acres%20resort%20and%20spa-min.jpg" alt="" className="image"/>                    
                        <div className="text-overlay">
                        <div className="text-overlay">
                            <p>Budget Stays</p>
                        </div>
                </div>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                <div className="image-container">
                        <img src="https://uploads-ssl.webflow.com/576fd5a8f192527e50a4b95c/5bfe53d5865bafeffd841e7e_98%20acres%20resort%20and%20spa-min.jpg" alt="" className="image"/>                    
                        <div className="text-overlay">
                        <div className="text-overlay">
                            <p>Beachside Villas & Bungalows</p>
                        </div>
                </div>
                </div>
                </div>
                <div className="col-3">
                <div className="image-container">
                        <img src="https://uploads-ssl.webflow.com/576fd5a8f192527e50a4b95c/5bfe53d5865bafeffd841e7e_98%20acres%20resort%20and%20spa-min.jpg" alt="" className="image"/>                    
                        <div className="text-overlay">
                        <div className="text-overlay">
                            <p>Family-Friendly Resorts</p>
                        </div>
                </div>
                </div>
                </div>

                <div className="col-3">
                <div className="image-container">
                        <img src="https://uploads-ssl.webflow.com/576fd5a8f192527e50a4b95c/5bfe53d5865bafeffd841e7e_98%20acres%20resort%20and%20spa-min.jpg" alt="" className="image"/>                    
                        <div className="text-overlay">
                        <div className="text-overlay">
                            <p>Treehouse Stays</p>
                        </div>
                        </div>
                </div>
                </div>
                
                
            </div>

            <div className="col-3 guide">
                <div className="card guide-ds">
                    <h2>Island Guide-Accomadation Guide</h2>
                    <hr/>
                    <h6>5 Star
                        <starIcon />
                        <starIcon />    
                        <starIcon />
                        <starIcon />
                        <starIcon />
                    </h6>
                    <p>Superior standard and an extensive range of first-class guest services</p><br />
                    <h6>4 Stars    
                        <starIcon />
                        <starIcon />
                        <starIcon />
                        <starIcon />
                    </h6>
                    <p>Exceptional comfort and premium amenities designed for an unforgettable stay.</p><br />
                    <h6>3 Stars    
                        <starIcon />
                        <starIcon />
                        <starIcon />
                    </h6>
                    <p>Elegantly designed stays offering spotless comfort and high-quality furnishings for a relaxing experience.</p><br />
                    <h6>Less than 3 Stars</h6>
                    <p>Simple yet well-maintained accommodations ensuring a comfortable and hassle-free stay.</p>
                    <h6>Boutique Hotel and Villas</h6>
                    <p>An intimate yet upscale retreat, tailored for discerning guests seeking personalized service and premium luxury.</p><br />
                    <h6>Bungalow</h6>
                    <p>A cozy, single-story home featuring a charming enclosed porch—perfect for relaxed island living..</p><br />
                    <h6>Boutique Hotel</h6>
                    <p>An exclusive, upscale retreat designed for elite travelers seeking exceptional service and refined luxury.</p><br />
            
                </div>
                </div>
                </div>
                </div>
    </div>
  )
}

export default Accomadations   
