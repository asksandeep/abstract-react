import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Homeservices() {
  return (
    <>
      <section className="home-section-1">
        <div className="container">
          <h2 className="text-center">AbstractIT Group: Trusted Partner for Web, App, and Software Development</h2>
          <p className="text-center content-para">
            At AbstractIT Group, we provide end-to-end software solutions designed to empower businesses with reliability, scalability, and innovation. Our expertise guarantees smooth execution and results that drive growth.
          </p>
          <div className="inner">
            <div className="item">
              <span>1</span>
              <Link to="/web-app-development">
                <div className="icon"><img src="img/web-app.png" alt="" /></div>
                <h3>Web Application Development</h3>
                <p>We design and develop secure, scalable, and high-performance web applications. Our team blends modern design with powerful functionality to create seamless experiences.</p>
              </Link>
            </div>
            <div className="item">
              <span>2</span>
              <Link to="/ai-automation">
                <div className="icon"><img src="img/ai.png" alt="" /></div>
                <h3>AI Automation</h3>
                <p>We create intelligent automation solutions that streamline workflows and reduce manual effort. Our AI-driven systems boost efficiency, accuracy, and decision-making across industries.</p>
              </Link>
            </div>
            <div className="item">
              <span>3</span>
              <Link to="/mobile-app-development">
                <div className="icon"><img src="img/mobile-app.png" alt="" /></div>
                <h3>Mobile App Development</h3>
                <p>We design and develop user-friendly mobile apps tailored to your business needs. Our solutions ensure seamless performance, responsive design, and secure functionality.</p>
              </Link>
            </div>
            <div className="item">
              <span>4</span>
              <Link to="/responsive-uiux">
                <div className="icon"><img src="img/ui-ux.png" alt="" /></div>
                <h3>Responsive UI/UX</h3>
                <p>We craft intuitive and engaging interfaces that deliver seamless user experiences. Our responsive designs adapt perfectly across devices, ensuring accessibility and usability.</p>
              </Link>
            </div>
            <div className="item">
              <span>5</span>
              <Link to="/qa-testing-security">
                <div className="icon"><img src="img/qa.png" alt="" /></div>
                <h3>QA Testing/Security</h3>
                <p>We ensure software quality with rigorous testing across functionality, performance, and security. Our QA processes identify and fix issues early to deliver reliable, bug-free solutions.</p>
              </Link>
            </div>
            <div className="item">
              <span>6</span>
              <Link to="/health-care-consultation">
                <div className="icon"><img src="img/health.png" alt="" /></div>
                <h3>Health Care Software</h3>
                <p>We provide digital solutions that simplify healthcare consultation and patient engagement. Our platforms enable secure communication, scheduling, and data management with ease.</p>
              </Link>
            </div>
            <div className="item">
              <span>7</span>
              <Link to="/health-care-consultation">
                <div className="icon"><img src="img/digital-marketing.png" alt="" /></div>
                <h3>Digital Marketing</h3>
                <p>We craft data-driven marketing strategies to boost online visibility and engagement. Our services include SEO, social media, ads, and content tailored to your business goals.</p>
              </Link>
            </div>
            <div className="item">
              <span>8</span>
              <Link to="/software-development">
                <div className="icon"><img src="img/api.png" alt="" /></div>
                <h3>Custom Software Development</h3>
                <p>We build reliable and scalable software solutions tailored to unique business needs. Our development process ensures security, performance, and seamless integration.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
