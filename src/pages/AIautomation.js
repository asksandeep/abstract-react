import NavbarInnerPage from "../components/NavbarInnerPage";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Technologystack from "../components/Technologystack";
import Tabs from "../components/Tabs";

function AIautomation() {
    return (
        <>
            <NavbarInnerPage />

            <div className="inner-hero">
                <div className="container">
                    <ul className="breadcrumb">
                        <li> <Link to="/">Home</Link> </li>
                        <li> <Link to="">Our Services</Link> </li>
                        <li> AI Development  </li>
                    </ul>
                    <h1> Leading AI Development Company</h1>
                    <p className="content-para">Empower your business with AI development that simplifies complex workflows through smart automation. From strategy and consulting to custom-built AI tools, we help you innovate faster, boost efficiency, and drive measurable performance.</p>
                </div>
            </div>

            <section className="services-5">
                <div className="container">
                    <h2 className="text-center">
                        Comprehensive AI Development Services
                    </h2>
                    <p className="content-para">We offer a wide range of AI development services designed to automate processes, enhance decision-making, and unlock new business opportunities.</p>
                    <div className="inner">
                        <div className="item">
                            <img src="img/integrations.png" alt="" className="icon" />
                            <h3>Smart AI Integration Services</h3>
                            <p>Our AI integration services help modernize your business processes without disrupting operations, ensuring smooth adoption and measurable outcomes.</p>
                        </div>
                        <div className="item">
                            <img src="img/robot-ai.png" alt="" className="icon" />
                            <h3>AI Infrastructure Tailored for Your Business</h3>
                            <p>Our AI architecture services provide a strong foundation for deploying intelligent solutions that integrate seamlessly into your business ecosystem.</p>
                        </div>
                        <div className="item">
                            <img src="img/innovation.png" alt="" className="icon" />
                            <h3>AI-Powered Robotics Solutions</h3>
                            <p>We combine artificial intelligence and robotics to build intelligent systems that automate tasks, improve efficiency, and drive innovation across industries.</p>
                        </div>
                        <div className="item">
                            <img src="img/creative.png" alt="" className="icon" />
                            <h3>Concept-to-Prototype AI Development</h3>
                            <p>Our concept-to-prototype approach reduces risk, accelerates innovation, and ensures your AI solutions are business-ready before full-scale deployment.</p>
                        </div>
                        <div className="item">
                            <img src="img/ai-chip.png" alt="" className="icon" />
                            <h3>Smarter Businesses with Gen AI</h3>
                            <p>We harness the power of Generative AI to create intelligent solutions that enhance creativity, automate workflows, and drive innovation across industries.</p>
                        </div>
                        <div className="item">
                            <img src="img/ai-technology.png" alt="" className="icon" />
                            <h3>Deep Learning for Smarter Insights</h3>
                            <p>We develop deep learning models that enable intelligent automation, advanced analytics, and smarter decision-making across industries.</p>
                        </div>
                        <div className="item">
                            <img src="img/machine-learning.png" alt="" className="icon" />
                            <h3>Machine Learning for Smarter Businesses</h3>
                            <p>From recommendation engines to predictive analytics, we deliver customized machine learning applications tailored to your business needs.</p>
                        </div>
                        <div className="item">
                            <img src="img/spy.png" alt="" className="icon" />
                            <h3>Advanced Computer Vision Solutions</h3>
                            <p>Our expertise in image recognition, object detection, and video analytics helps businesses automate processes and enhance operational efficiency.</p>
                        </div>
                        <div className="item">
                            <img src="img/brain.png" alt="" className="icon" />
                            <h3>Streamline Operations with AI Automation</h3>
                            <p>From repetitive task automation to intelligent decision-making, we empower organizations to achieve operational excellence.</p>
                        </div>
                    </div>
                </div>
            </section>

            
            <Technologystack />


            <section className="services-4">
                <div className="container">
                    <h2 className="text-center">How We Create Intelligent AI Solutions</h2>
                    <p className="content-para">From strategy and concept to prototyping, development, and deployment, our approach ensures AI solutions are reliable, efficient, and impactful.</p>
                    
                    <Tabs />
                    
                </div>
            </section>

            <Footer />

        </>
    )
}

export default AIautomation