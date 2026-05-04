import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";


function Navbar() {
  // For Mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // For Modal
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    e.preventDefault(); // page reload/jump stop
    setShowModal(true);
  };

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // For Dropdown menu
  const toggleDropdown = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);


  return (
    <>
      <div className="video-background">
        <div className="video-foreground">
          <iframe src="https://www.youtube.com/embed/IMxDeACOWCE?autoplay=1&mute=1&playsinline=1&loop=1&playlist=IMxDeACOWCE&controls=0&disablekb=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      {/* <!-- header start --> */}
      <header className="home-header">
        <div className="topbar">
          <div className="container">
            <div className="inner">
              <div>
                <ul className="toplinks">
                  <li><img src="img/india.png" alt="" /> India:  <a href="tel:+91-9923290693">+91-9923290693</a></li>
                  <li>/</li>
                  <li><a href="tel:+91-9096300320">+91-9096300320</a></li>
                  <li></li>
                  <li><img src="img/germany.png" alt="" /> Germany:  <a href="tel:+49-1625956500">+49-1625956500</a></li>
                  <li>/</li>
                  <li><a href="mailto:contact@abstractitgroup.com">eMail: contact@abstractitgroup.com</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- for Mobile menu Start --> */}
        <div className="mobileMenubar">
          <Link to="/"><img src="img/logo.png" alt="" className="logo" /></Link>
          <span className="menu-toggle" onClick={() => setMenuOpen(true)}>
            <img src="/img/hamburger.svg" alt="menu" />
          </span>
          <nav className={`mobilemenu ${menuOpen ? "open" : ""}`}>
            {/* Close Icon */}
            <img
              src="/img/close-icon.svg"
              alt="close"
              className="menu-toggle closeicon"
              onClick={() => setMenuOpen(false)}
            />
            <ul className="m-nav">
              <li><a href="/" onClick={() => setMenuOpen(false)}>Home</a></li>
              <li><a href="/about-us" onClick={() => setMenuOpen(false)}>About Us</a></li>
              <li><a href="/our-services" onClick={() => setMenuOpen(false)}>Our Services</a></li>
              <li><a href="/career" onClick={() => setMenuOpen(false)}>Career</a></li>
              <li><a href="/hire-developers" onClick={() => setMenuOpen(false)}>Hire Developers</a></li>
              <li><a href="/contact" className="contactBtn" onClick={() => setMenuOpen(false)}>Contact Us</a></li>
            </ul>
          </nav>
        </div>
        <div className="mobile-blur-bg"></div>

        {/* <!-- navbar(desktop) start here-->*/}
        <div className="page-header">
          <div className="container">
            <div className="navbar">
              <a href="index.php" aria-label="Read more">
                <Link to="/"><img src="img/logo.png" alt="" className="logo" /></Link>
              </a>
              <nav className="nav">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about-us">About</Link></li>
                  <li>
                    {/* <!--<a href="our-services.php" title="Our Services">Our Services</a>--> */}
                    <div className="dropdown" ref={dropdownRef}>
                      <a href="#" className="dropbtn" onClick={toggleDropdown}>Our Services
                        <i className="fa-solid fa-angle-down"></i>
                      </a>
                      <div className={`dropdown-content ${open ? "show" : ""}`}>
                        <Link to="/web-app-development">Web App Development</Link>
                        <Link to="/ai-automation">AI Automation</Link>
                        <Link to="/mobile-app-development">Mobile App Development</Link>
                        <Link to="/responsive-uiux">Responsive UI/UX</Link>
                        <Link to="/qa-testing-security">QA Testing/Security</Link>
                        <Link to="/health-care-consultation">Health Care Consultation</Link>
                        <Link to="/digital-marketing">Digital Marketing</Link>
                        <Link to="/software-development">Software Development</Link>
                      </div>
                    </div>
                  </li>
                  <li><Link to="/career">Career</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </nav>
              {menuOpen && (
                <div
                  className="mobile-blur-bg"
                  onClick={() => setMenuOpen(false)}
                ></div>
              )}
              <a href="#" className="contactBtn" onClick={handleClick}>Get a Qoute </a>
              {/* Modal */}
              {showModal && (
                <div
                  className="modal-overlay"
                  onClick={() => setShowModal(false)}
                >
                  <div
                    className="modal-box"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="modal-header">
                      <h3>Get a Qoute</h3>
                      <p>Fill out the form below and we'll get back to you within 24 hours.</p>
                      <button className="close" onClick={() => setShowModal(false)}>&times;</button>
                    </div>
                    <div className="modal-body">
                      <form class="contactForm">
                        <div class="form-group">
                          <label>Name<span>*</span></label>
                          <input type="text" name="name" placeholder="Your name" class="form-control" />
                        </div>
                        <div class="form-group">
                          <label>Email<span>*</span></label>
                          <input type="email" name="email" placeholder="your.email@example.com" class="form-control" />
                        </div>
                        <div class="form-group">
                          <label>Phone<span>*</span></label>
                          <input type="tel" name="tel" placeholder="Enter your phone number" class="form-control" />
                        </div>
                        <div class="form-group">
                          <label>Service Intrested In</label>
                          <input type="text" name="ser" placeholder="e.g., Web development, Mobile app development, etc." class="form-control" />
                        </div>
                        <div class="form-group">
                          <label>Message</label>
                          <textarea class="form-control" placeholder="Tell us about your project..."></textarea>
                        </div>
                        <button class="contactsubmitBtn">Send Message</button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar