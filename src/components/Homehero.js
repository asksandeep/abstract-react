import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";


function Homehero() {
  return (
    <>
    <div className="home-hero">
    <div className="container">
      <div className="inner">
      <h1>
      Website and Software <br/> Development Company
      </h1>
      <h2>Accurate, Reliable, and Industry-Specific Solutions</h2>
      <p>For over 15 years, we've transformed industry challenges into opportunities. We deliver measurable results through custom software and website solutions that are dependable, efficient, and built to scale.</p>
      <div className="btn-area">
        <Link to="/contact" className="requestBtn">Request advice</Link>
        <Link to="/about-us" className="gettoknow">Get to know us</Link>
      </div>
    </div>
    </div>
  </div>

  {/* <!-- header end --> */}
  <div className="fixed-left-social">
      <a href="https://www.facebook.com/abstractitgroup" target="_blank" className="facebook"><i className="fa-brands fa-facebook-f"></i></a>
      <a href="https://wa.link/tusjmu" target="_blank" className="insta"><i className="fa-brands fa-whatsapp"></i></a>
      <a href="https://www.instagram.com/abstractitgroup/" target="_blank" className="twitter"><i className="fa-brands fa-instagram"></i></a>
      <a href="https://www.linkedin.com/company/abstractitgroup/" target="_blank" className="linkedin"><i className="fa-brands fa-linkedin-in"></i></a>
  </div>
    </>
  )
}

export default Homehero