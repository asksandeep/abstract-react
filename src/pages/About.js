import NavbarInnerPage from "../components/NavbarInnerPage";
import Footer from "../components/Footer";
import Clientarea from "../components/Clientarea";
import Cta from "../components/Cta";
import TechnologyInnovation from "../components/TechnologyInnovation";
import { Link } from "react-router-dom";
import Industries from "../components/Industries";



function About() {
  return (
    <>
      <NavbarInnerPage />

      <div className="inner-hero">
        <div className="container">
          <ul className="breadcrumb">
            <li><Link to="/">Home</Link></li>
            <li> About us </li>
          </ul>
          <h1>Smart, Scalable Solutions for Every Stage</h1>
          <p className="content-para">AbstractIT Group is a dynamic technology company committed to delivering innovative and reliable digital solutions. We specialize in software development, mobile and web applications, AI automation, and IT consulting. Our team of skilled professionals combines creativity with technical expertise to build scalable and secure solutions. We focus on user experience, performance, and long-term value to help businesses stay ahead in the digital era.</p>
          <h2>Open to partnerships with enterprises that share our vision for innovation and growth. </h2>
        </div>
      </div>

      <section className="about-1">
        <div className="container">
          <div className="inner">
            <div className="col">
              <div className="item">
                <div className="number orange">
                  <span>5</span>
                </div>
                <h3>Countries</h3>
                <p>Proven Experience Across Business Domains</p>
              </div>
            </div>
            <div className="col">
              <div className="item highlight">
                <div className="number">
                  <span>15</span>
                </div>
                <h3>Years</h3>
                <p> Decade of Leadership and Innovation</p>
              </div>
            </div>
            <div className="col">
              <div className="item">
                <div className="number orange">
                  <span>50</span>
                </div>
                <h3>Clients</h3>
                <p>Serving a Global Clientele with 90% Retention</p>
              </div>
            </div>
            <div className="col">
              <div className="item">
                <div className="number orange">
                  <span>200</span>
                </div>
                <h3>Projects</h3>
                <p>Powered Next-Gen Tech to Deliver Cutting-Edge Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Clientarea />

      <TechnologyInnovation />

      <Cta />

      <Industries />

      <Footer />
    </>
  );
}

export default About;