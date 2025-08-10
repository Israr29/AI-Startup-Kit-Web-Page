import "./Navbar.css";
import navLogo from "../../assets/icons/nav-logo.png";

import React, { useState } from "react";

function Navbar() {
  const [showFeatures, setShowFeatures] = useState(false);
  const [showCompany , setShowCompany] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      
      <div className="navbar">
        <div className="nav-logo">
          <img src={navLogo} alt="AI-Kit-logo" />
          
        </div>
     

      
        <div className={`nav-links ${showMenu ? "open" : ""}`}>
          <li className="dropdown" onMouseEnter={() => setShowFeatures(true)} onMouseLeave={() => setShowFeatures(false)}>
            <a href="#features">
              Features <i className="fa-solid fa-caret-down"></i>
            </a>
            {
              showFeatures && (
                <ul className="dropdown-menu">
                  <li><a href="#ai-tools">AI Tools</a></li>
                  <li><a href="#automation">Automation</a></li>
                  <li><a href="#integrations">Integrations</a></li>
                </ul>
              )
            }
          </li>
          <li>
            <a href="#developers">Developers</a>
          </li>
          <li className="dropdown" onMouseEnter={()=> setShowCompany(true)} onMouseLeave={() => setShowCompany(false)}>
            <a href="#company">
              Company <i class="fa-solid fa-caret-down"></i>
            </a>
            {
              showCompany && (
                <ul className="dropdown-menu">
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#press">Press</a></li>
            </ul>
              )
            }
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#Changelog">Changelog</a>
          </li>
        </div>
        <div className="responsive">
        <div className="nav-btn">
          <div className="cover">
            <button>Join waitlist</button>
          </div>
                       {
        <div className={`hamburger ${showMenu ? "open" : ""}`} onClick={() => setShowMenu(!showMenu)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
      }
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Navbar;
