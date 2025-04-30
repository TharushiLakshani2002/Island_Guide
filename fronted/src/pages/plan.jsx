import Reac from 'react'
import Navbar from '../components/Navbar'
import '../styles/plan.css'
import {Link} from 'react-router-dom';
import Footer from '../components/Footer';


function Plan() {
    return (
        <>
            <div className="plan-container">
                <div className="plan-container1">   
                    <Navbar/>
                    <div className="plan-container-text">
                        <h2>Plan Your Trip As You Wish...</h2>
                        <p>Discover the hidden gems and iconic 
                            wonders as you explore the breathtaking beauty of our island.</p> 
                    </div>
                </div>
            </div>

            <div className="plan-container2">
                <div className="container plan-list">
                    <div className="row">
                        <Link className='col-6 plan-items-link' to='/accomadations'>
                            <div className="plan-items">
                                <img src="https://global-uploads.webflow.com/576fd5a8f192527e50a4b95c/5bfe547dc7e7c24e006ed95b_laya%20safari%20resort-min.jpg" alt="" />
                                <div className='plan-items-description'>
                                    <h3>Find Your Accomadations</h3>
                                    <p>Find your perfect stay and feel at home, wherever you roam in Sri Lanka.</p>      
                                </div>
                            </div>
                        </Link>

                        <Link className='col-6 plan-items-link' to='/tour-guides'>
                            <div className="plan-items">
                                <img src="https://tse4.mm.bing.net/th/id/OIP.J9hjpRFJ5TSVFx8YoxEASgHaE8?w=1024&h=683&rs=1&pid=ImgDetMain" alt="" />
                                <div className='plan-items-description'>
                                    <h3>Reach Tour Guides</h3>
                                    <p>Explore the island with our expert guides who share local secrets and take you beyond the usual.</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="row">
                        <Link className='col-6 plan-items-link' to='/camping-sites'>
                            <div className="plan-items">
                                <img src="https://tse3.mm.bing.net/th/id/OIP.nZlblikb7Kimi6VqaU_iAgHaE8?rs=1&pid=ImgDetMain" alt="" />
                                <div className='plan-items-description'>
                                    <h3>Camping Sites</h3>
                                    <p>Camp under the stars in Sri Lanka’s lush forests and serene coastlines—nature’s best awaits you.</p>
                                </div>
                            </div>
                        </Link>

                        <Link className='col-6 plan-items-link' to='/drivers'>
                            <div className="plan-items">
                                <img src="https://tse1.mm.bing.net/th/id/OIP.DmBJanRHOXKyfFvOKhnmOwHaE8?rs=1&pid=ImgDetMain" alt="" />
                                <div className='plan-items-description'>
                                    <h3>Find Your Driver</h3>
                                    <p>Travel stress-free with reliable drivers ready to guide you across the island comfortably.</p> 
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}
export default Plan



  