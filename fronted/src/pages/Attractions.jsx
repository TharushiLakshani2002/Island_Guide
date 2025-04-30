import React from "react";
import Navbar from "../components/Navbar";
import '../styles/attractions.css';
import Footer from "../components/Footer";
// import {Link} from "react-router-dom";
// import { useState, useEffect } from "react";
// // import axios from "axios";
// import ReactPaginate from "react-paginate";

function Attractions() {
    return(
        <div className="attractions-container">
           <div className="attractions-container1">
                <Navbar/>
                <div className="image-row-container">
                    <div className="image-row">
                        <h2>Sri Lanka Top Attractions</h2>
<p>
    Sri Lanka is a country rich in natural beauty, 
    cultural heritage, and diverse attractions.
     Here are some of the top attractions to explore
      in Sri Lanka:
</p>
<div className="search-content">
    <input
    type="text"
    placeholder="Search for attractions..."
    //value={input}
    //onchange={handleInputChange}
    />
    <button className="atttaction-button">Search</button>
    </div>
    </div>
    </div>
    </div>
    <div className="places">
    <div className="row place-review">
          <nav class="bg-dark navbar-dark">
  <div class="container place-list-container">
  </div>
  </nav> 
   <section id="header" class="jumbotron text-center">
     <h1 class="display-3">Explore</h1>
     <p class="lead">Discover the hidden gems and iconic
         wonders as you 
        explore the breathtaking beauty of our island.</p>
        </section>
        <section id="gallery">
  <div class="container">
    <div class="row">
      {/* {
        displayPlaces
      } */}
      <div className="paging">
        {/* <ReactPaginate 
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={ "previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            previousClassName={pageNumber === 0 ? "hidden" : ""}
        /> */}
     
     </div>

  </div>
</div>
</section>


          </div>
        </div>
        <Footer/>
    </div>
  );
}

export default Attractions;