import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";  
import '../styles/accomadations.css';
import StarIcon from '@mui/icons-material/Star';

function Accomadations() {
    return (
        <div className="accomadations-container">
        <Navbar/>
        <div className="accomadation-container1">
            <div className="row">
                <div className="row">
                    <div className="col-3">
                        <div className="image-container">
                        <img src="https://images.rosewoodhotels.com/is/image/rwhg/heroshot-punta-bonita-pool-and-beach-1" alt="" className="image"/>                    
                        <div className="text-overlay">
                        <div className="text-overlay">
                            <p>Luxury Resorts</p>
                        </div>
                </div>
                
                </div>
                </div>
                <div className="col-3">
                <div className="image-container">
                        <img src="https://tse2.mm.bing.net/th/id/OIP.VhdjImDvLPAl_Np3zzZf6AHaEo?rs=1&pid=ImgDetMain" alt="" className="image"/>                    
                        <div className="text-overlay">
                        <div className="text-overlay">
                            <p>Lodges & Nature Resorts</p>
                        </div>
                </div>
                </div>
                    
                </div>
                <div className="col-3">
                <div className="image-container">
                        <img src="https://tse2.mm.bing.net/th/id/OIP.BZW-iaNBcPOR9TkSFZPZnwHaEK?rs=1&pid=ImgDetMain" alt="" className="image"/>                    
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
                        <img src="https://tse4.mm.bing.net/th/id/OIP.LNBcp_C6a5KIen1hnUuUaQHaEU?rs=1&pid=ImgDetMain" alt="" className="image"/>                    
                        <div className="text-overlay">
                        <div className="text-overlay">
                            <p>Beachside Villas & Bungalows</p>
                        </div>
                </div>
                </div>
                </div>
                <div className="col-3">
                <div className="image-container">
                        <img src="https://th.bing.com/th/id/R.e000b86af535ca6cd49b54a913fe7d90?rik=kZHrvBC2vvypWg&pid=ImgRaw&r=0" alt="" className="image"/>                    
                        <div className="text-overlay">
                        <div className="text-overlay">
                            <p>Family-Friendly Resorts</p>
                        </div>
                </div>
                </div>
                </div>

                <div className="col-3">
                <div className="image-container">
                        <img src="https://tse4.mm.bing.net/th/id/OIP.f0ZWRQC2ikjLQOKsu4k-9AHaE7?rs=1&pid=ImgDetMain" alt="" className="image"/>                    
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
                    <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                    </h6>
                    <p>Superior standard and an extensive range of first-class guest services</p><br />
                    <h6>4 Stars    
                  
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                    </h6>
                    <p>Exceptional comfort and premium amenities designed for an unforgettable stay.</p><br />
                    <h6>3 Stars    
                   
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
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
