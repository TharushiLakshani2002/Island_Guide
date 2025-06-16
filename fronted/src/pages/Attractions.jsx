import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/attractions.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";

function Attractions() {
  const [places, setPlaces] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [input, setInput] = useState('');
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    setPageNumber(0);
  }, [input]);

  const placesPerPage = 8;
  const pagesVisited = pageNumber * placesPerPage;

  const displayPlaces = filteredPlaces
    .slice(pagesVisited, pagesVisited + placesPerPage)
    .map((place) => (
      <div className="col-lg-3 mb-3" key={place._id}>
        <div className="card place">
          <img src={place.image} alt={place.name} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{place.name}</h5>
            <p className="card-text">{place.description}</p>
            <Link to={`/attractions/${place._id}`} className="btn btn-outline-success btn-sm">
              Read More
            </Link>
          </div>
        </div>
      </div>
    ));

  const pageCount = Math.ceil(filteredPlaces.length / placesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    axios.get('http://localhost:3001/api/v1/places')
      .then((response) => {
        const filtered = response.data.filter((place) =>
          place.name.toLowerCase().includes(input.toLowerCase())
        );
        setPlaces(response.data);
        setFilteredPlaces(filtered);
      })
      .catch((err) => console.log(err));
  }, [input]);

  const handleSearchClick = () => {
    // Redirect to /place with search query param
    navigate(`/place?search=${encodeURIComponent(input)}`);
  };

  return (
    <div className="attractions-container">
      <div className="attractions-container1">
        <Navbar />
        <div className="image-row-container">
          <div className="image-row">
            <h2>Sri Lanka Top Attractions</h2>
            <p>
              Sri Lanka is a country rich in natural beauty, cultural heritage,
              and diverse attractions. Here are some of the top attractions to explore
              in Sri Lanka...
            </p>
            <div className="search-content">
              <input
                type="text"
                placeholder="Search for attractions..."
                value={input}
                onChange={handleInputChange}
              />
              <button className="atttaction-button" onClick={handleSearchClick}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="places">
        <div className="row place-review">
          <nav className="bg-dark navbar-dark">
            <div className="container place-list-container"></div>
          </nav>
          <section id="header" className="jumbotron text-center">
            <h1 className="display-3">Explore</h1>
            <p className="lead">
              Discover the hidden gems and iconic wonders as you explore the breathtaking
              beauty of our island.
            </p>
          </section>
          <section id="gallery">
            <div className="container">
              <div className="row">{displayPlaces}</div>
              <div className="paging">
                <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={"paginationBttns"}
                  previousLinkClassName={"previousBttn"}
                  nextLinkClassName={"nextBttn"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive"}
                  previousClassName={pageNumber === 0 ? "hidden" : ""}
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Attractions;
