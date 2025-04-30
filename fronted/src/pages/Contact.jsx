import React, { useState } from "react";
import '../styles/contact.css';
import logo from '../images/logo.png';
import Navbar from "../components/Navbar";

const Contact= () => {
  // Form state to store the input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add code here to send the form data to an API or backend service
    alert("Form submitted! We will get back to you shortly.");
    console.log(formData);
    // Reset the form fields
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
          <div className="row contact-container1">
          <div className="row contact-container1 nav">
        <Navbar/>
        </div>
        
        </div>
            <div className="row">
              
                <div className="main-text">
                    <h1>
                        <span className="main">Contact Us </span>
                        <br /><span>IslandGuide </span> 
                        </h1>
                    <p>Explore the beauty of the islands with us.
                    If you have any questions or inquiries, feel free to reach out to us!
                    </p>
                    </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-5">
                <div className="contact">
                <form className='contact-form'></form>

      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Enter your message"
            required
          />
        </div>
        
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      <div className="contact-info">
        <h3>Our Location:</h3>
        <p>Island Guide, Tropical Beach, Paradise Island</p>
        <h3>Contact Details:</h3>
        <p>Email:islandguide123@gmail.com</p>
        <p>Phone: +123 456 7890</p>
      </div>
      </div>
    </div>
  </div>
  );
};

export default Contact;
