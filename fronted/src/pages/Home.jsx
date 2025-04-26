import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/home.css'
import pic1 from '../images/pic1.png'
import pic2 from '../images/pic2.png'
import pic3 from '../images/pic3.png'
import pic4 from '../images/pic4.png'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {Link} from 'react-router-dom';

function Home() {
  return (
<div className="home-container">
      
    <div className='row home-container1'>
            <Navbar/>
        <div className="row home-row2">
              <div className="col-5 description">
              <p>
Discover a world of breathtaking beaches, vibrant cultures, and unforgettable adventures. Whether you dream of exploring hidden waterfalls, snorkeling in crystal-clear waters, tasting exotic cuisines, or simply relaxing under swaying palms, Island Guide is your trusted companion.

Plan your perfect getaway with insider tips, curated travel itineraries, and must-see attractions. From luxury resorts to charming local villages, we bring you the best experiences every island has to offer.

Start your journey today and let the island breeze carry you into a paradise of endless memories.</p>
              </div>
              <div className="col-5 search-block" >
                
                  <input type="text" name="" id="" className='search-text' />
                  <button className='search-btn'>Search</button>
                  <br /> <br />
                  <p>Explore your destination here...</p>
              </div>
        </div>
        
    </div>
    
    <div className="row home-container2">
      <div className="home-text">
            <h2>Explore Island Stories...</h2>
            <p className='main-para'>Discover the narratives woven into every corner and smile of Sri Lanka. 
                  This enchanting island is brimming with captivating tales, and we are eager 
                  to unveil its treasures just for you. Join us on this journey to our idyllic 
                  paradise, where stories come to life.</p>
            <div className="row features">
            <div className="col-3 card">
                        <img src={pic1}/>
                        <div className="layer">
                              <h3>Explore</h3>
                              <p> We didn’t follow a map or any specific path — we simply let our curiosity guide us. Along the way, we met friendly locals, learned about the history of the land, and collected
                                     memories that we would treasure forever.</p>
                              <Link to ="/attractions"><OpenInNewIcon/></Link>
                        </div>
                  </div>
                  <div className="col-3 card">
                        <img src={pic2}/>
                        <div className="layer">
                              <h3>Things To Do</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, </p>
                              <a href="#" target="_blank"><OpenInNewIcon/></a>
                        </div>
                        
                  </div>
                  <div className="col-3 card">
                        <img src={pic3}/>
                        <div className="layer">
                              <h3>Plan Your Trip</h3>
                              <p>A well-planned trip not only saves time and money but also allows you to relax and enjoy every moment. With a little preparation, your journey will be smooth, 
                                    exciting, and full of wonderful memories., </p>
                    <Link to ="/plan"><OpenInNewIcon/></Link>
                        </div>
                        
                  </div>
                  <div className="col-3 card">
                        <img src={pic4}/>
                        <div className="layer">
                              <h3>Our Services</h3>
                              <p>You’re looking for a relaxing getaway, an adventurous journey, or a business trip, our experienced team is here to make your travel experience smooth and unforgettable. Trust us to turn your dream trip into reality with 
                                    our reliable and customer-focused services., </p>
                    <a href="#" target="_blank"><OpenInNewIcon/></a>
                        </div>
                  </div>
            </div>
    </div>
    </div>
              <Footer/>
      
    </div>

  )
}

export default Home