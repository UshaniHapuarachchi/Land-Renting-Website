import React, { useState } from "react";
//import "./style/lands.css";
import { FaLandmark, FaLocationArrow, FaMap, FaSearch, FaSearchLocation } from "react-icons/fa";
import ad1 from "../pics/ad1.gif";
import ad2 from "../pics/ad2.png";
import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useEffect, } from "react";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db, storage } from "../firebase";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faDollar, faDollarSign, faHouse, faLandmark, faLocation, faLocationDot, faLocationPin } from '@fortawesome/free-solid-svg-icons'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Lands = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleLocationChange = async (event) => {
    setSelectedLocation(event.target.value);


  
      const landsRef = collection(db, "Land");
      const query = query(landsRef, where("location", "==", "kelaniya"));
      const data = await getDocs(query);
      console.log(data)
      setLands(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    


    console.log(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleDurationChange = (event) => {
    setSelectedDuration(event.target.value);
  };

  const handleReset = () => {
    setSelectedLocation("");
    setSelectedSize("");
    setSelectedType("");
    setSelectedDuration("");
    setSearchTerm("");
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };


  const [lands, setLands] = useState([]);

  useEffect(() => {
    const fetchData = async () => {


      const landsRef = collection(db, "Land");
      const data = await getDocs(landsRef);
      console.log(data)
      setLands(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));



      
    };
    fetchData();

  }, []);










  return (


    <>
      <div className="container">

        <div className="row">
          <div className="col-sm-12 col-md-3 col-lg-3">
            <div className="land-sidebar-container">
              <h2>Sort by</h2>

              <div className="location">
                <label>
                  <select
                    value={selectedLocation}
                    onChange={handleLocationChange}
                    className="form-control"
                  >
                    <option value="">LOCATION</option>
                    <option value="Ampara">Ampara</option>
                    <option value="Anuradhapura">Anuradhapura</option>
                    <option value="Badulla">Badulla</option>
                    <option value="Batticaloa">Batticaloa</option>
                    <option value="Colombo">Colombo</option>
                    <option value="Galle">Galle</option>
                    <option value="Gampaha">Gampaha</option>
                    <option value="Hambantota">Hambantota</option>
                    <option value="Jaffna">Jaffna</option>
                    <option value="Kalutara">Kalutara</option>
                    <option value="Kandy">Kandy</option>
                    <option value="Kegalle">Kegalle</option>
                    <option value="Kilinochchi">Kilinochchi</option>
                    <option value="Mannar">Mannar</option>
                    <option value="Matale">Matale</option>
                    <option value="Matara">Matara</option>
                    <option value="Monaragala">Monaragala</option>
                    <option value="Mullaitivu">Mullaitivu</option>
                  </select>
                </label>
              </div>



              <div className="size">
                <label>
                  <select
                    value={selectedSize}
                    onChange={handleSizeChange}
                    className="form-control"
                  >
                    <option value="">SIZE</option>
                    <option value="10p">10 perches</option>
                    <option value="20p">20 perches</option>
                    <option value="50p">50 perches</option>
                    <option value="100p">100 perches</option>
                    <option value="1a">1 acre</option>
                    <option value="2a">2 acres</option>
                    <option value="3a">3 acres</option>
                    <option value="4a">4 acres</option>
                    <option value="5a">5 acres</option>
                    <option value="10a">10 acres</option>
                  </select>
                </label>
              </div>

              <div className="type">
                <label>
                  <select
                    value={selectedType}
                    onChange={handleTypeChange}
                    className="form-control"
                  >
                    <option value="">TYPE</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Residential">Residential</option>
                    <option value="Industrial">Industrial</option>
                  </select>
                </label>
              </div>

              <div className="duration">
                <label>
                  <select
                    value={selectedDuration}
                    onChange={handleDurationChange}
                    className="form-control"
                  >
                    <option value="">DURATION</option>
                    <option value="Short-term">Short-term</option>
                    <option value="Long-term">Long-term</option>
                    <option value="Sale">For Sale</option>
                  </select>
                </label>
              </div>

              <div className="reset-button">
                <button onClick={handleReset} className="btn btn-primary">
                  Reset
                </button>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-9 col-lg-9">
            <a href = "/landadd">
          <Button variant="primary" size="lg" active>
      Post a land
      </Button>
      </a>
            <div className="land-list-container">
              <div className="search-box-container">
                
                <input
                  type="text"
                  placeholder="Search here..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="form-control"
                />
              </div>

            <br></br>

              <div>
      



    <div className="container">
  <div className="row">
    {lands.map((land) => (
      <div className="col-md-6" key={land.id}>
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-5">
              <img src={land.imageUrls} className="card-img" alt="Land Image" />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title">{land.title}</h5>
                <p className="card-text">{land.description}</p>
                <ul className="list-unstyled">
                  <li><FontAwesomeIcon icon={faLocationDot} /> Location: {land.address}</li>
                  <li><FontAwesomeIcon icon={faDollarSign} /> Price: RS {land.rent}</li>
                </ul>
                <Link to={`/LandDetails?id=${land.id}`}>
                <button className="btn btn-primary">View Land</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>




           
              </div>
            </div>
          </div>
        </div>
      </div>

    </>


  );
};

export default Lands;