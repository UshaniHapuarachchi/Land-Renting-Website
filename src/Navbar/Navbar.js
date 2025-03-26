import React, { useState } from "react";
import "./Navbar.css";
import logo from "../pics/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <div class="nav-logo">
      <img src={logo} alt="Logo" />
      </div>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/Lands">Lands</a>
        <a href="/LegalInfo">Legal Info</a>
        <a href="/Register">Register</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
