import React, { useState } from "react";
import "./style/landadd.css";
import { db, storage } from "../firebase";
import Button from 'react-bootstrap/Button';

const LandAdd = () => {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [landsize, setLandsize] = useState("");
  const [description, setDescription] = useState("");
  const [rent, setRent] = useState("");
  const [role, setRole] = useState("coconut");
  const [ownername, setOwnername] = useState("");
  const [contactnumber, setContactnumber] = useState("");
  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [loader, setLoader] = useState(false);
  const [id, setId] = useState("");

  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];
    if (imageFile && images.length < 5) {
      setImages([...images, imageFile]);
      const imageUrl = URL.createObjectURL(imageFile);
      setImageUrls([...imageUrls, imageUrl]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const randomNum = getRandomNumber();

    // Upload images to Firebase Storage
    const urls = await Promise.all(
      images.map((image) => {
        const storageRef = storage.ref(`images/${image.name}`);
        return storageRef.put(image).then((snapshot) => {
          return snapshot.ref.getDownloadURL();
        });
      })
    );

    // Add data to Firebase Firestore
    db.collection("Land").add({
      title,
      address,
      landsize,
      description,
      rent,
      ownername,
      contactnumber,
      role,
      imageUrls: urls,
      id:randomNum
    });

    // Reset form fields and image state
    setTitle("");
    setAddress("");
    setLandsize("");
    setDescription("");
    setRent("");
    setOwnername("");
    setContactnumber("");
    setImageUrls([]);
    setImages([]);
    setLoader(false);


    function getRandomNumber() {
      return Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
    }
  };

    return (
      
      <div className="land-add">
        <center>
        <h1>Add your land here</h1>
        </center>
        <p>Out team is happy to add your land to our site.Fill out the </p>
          
          <p1>form and we'll be in touch as soon as possible.</p1>

       <form className="landadd-form" onSubmit={handleSubmit}>

          <div className="main-owner-info">
          <div className="owner-input-box">
          <table>
  <tr>
    <td><label>Title</label></td>
    <td><input value={title} placeholder="Enter land title" onChange={(e) => setTitle(e.target.value)} /></td>
  </tr><br></br>
  <tr>
    <td><label>Address</label></td>
    <td><input placeholder="Enter the land location" value={address} onChange={(e) => setAddress(e.target.value)} /></td>
  </tr> <br></br>
  <tr>
    <td><label>Land size</label></td>
    <td><input placeholder="Enter land size in perches" value={landsize} onChange={(e) => setLandsize(e.target.value)} /></td>
  </tr><br></br>
  <tr>
    
    <td><label>Description</label></td>
    <td><input placeholder="Enter Land description" value={description} onChange={(e) => setDescription(e.target.value)} /></td>
  </tr><br></br>
  <tr>
    <td><label>Rent (Rs) /Month</label></td>
    <td><input placeholder="Enter monthly rent" value={rent} onChange={(e) => setRent(e.target.value)} /></td>
  </tr>
</table>
</div>

<br></br>
        
          <div className="cb-category-box">
              <span className="cb-title-category">Land category</span>
            <label>
              <input
                type="radio"
                name="role"
                value="Paddyfield"
                checked={role === "Paddyfield"}
                onChange={(e) => setRole("Paddyfield")}
              />
              Paddy field
            </label>

            <label>
              <input
                type="radio"
                name="role"
                value="coconut"
                checked={role === "coconut"}
                onChange={(e) => setRole("coconut")}
              />
              Coconut
            </label>

            <label>
              <input
                type="radio"
                name="role"
                value="rubber"
                checked={role === "rubber"}
                onChange={(e) => setRole("rubber")}
              />
              Rubber
            </label>

            <label>
              <input
                type="radio"
                name="role"
                value="tea"
                checked={role === "tea"}
                onChange={(e) => setRole("tea")}
              />
              Tea
            </label>

            <label>
              <input
                type="radio"
                name="role"
                value="other"
                checked={role === "other"}
                onChange={(e) => setRole("other")}
              />
              Other
            </label></div></div><br></br><br></br><br></br>
            
            <div className="form-group col-md-4">
            <label htmlFor="price" className="col-form-label">
              Add Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
            <p>
              {images.length < 5
                ? `Add ${5 - images.length} images`
                : "Maximum number of images reached"}
            </p>
            {imageUrls.map((url) => (
              <img
                key={url}
                src={url}
                alt="Land"
                style={{ width: "200px", height: "200px" }}
              />
            ))}
          </div>

            <div className="contact-details">
            <label>Owner Name</label>
          <input
            placeholder="Enter your name"
            value={ownername}
            onChange={(e) => setOwnername(e.target.value)}
          />
   <br/>   <br/>
          <label>contact Number</label>
          <input
            placeholder="Enter your contact number"
            value={contactnumber}
            onChange={(e) => setContactnumber(e.target.value)}
          /></div>

<div className="d-grid gap-2" type="Post-ad">
      <Button variant="primary" size="lg" type="Post-ad" >
      Post ad
      </Button>
          
      </div>
     
         
        </form>
        
        </div>
      );
    };
    
export default LandAdd;
