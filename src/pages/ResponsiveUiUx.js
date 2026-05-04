import NavbarInnerPage from "../components/NavbarInnerPage";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Technologystack from "../components/Technologystack";
import Tabs from "../components/Tabs";
import Cta from "../components/Cta";
import Industries from "../components/Industries";

function ResponsiveUiUx() {
    return (
        <>
            <NavbarInnerPage />

            <div className="inner-hero">
                <div className="container">
                    <ul className="breadcrumb">
                        <li> <Link to="/">Home</Link> </li>
                        <li> <Link to="">Our Services</Link> </li>
                        <li> Responsive UI/UX </li>
                    </ul>
                    <h1>Seamless UI/UX Solutions for Your Business</h1>
                    <p className="content-para">Transform your vision into reality with our client-focused design experts. Abstract IT Group is a skilled UI/UX design company crafting websites with seamless, striking interfaces that enhance user experiences and drive goal conversions. Connect with our innovative UI/UX team today to bring your ideas to life.</p>
                </div>
            </div>

            <section className="services-5">
                <div className="container">
                    <h2 className="text-center">
                        Designing Engaging Digital Experiences
                    </h2>
                    <p className="content-para">We deliver end-to-end UI/UX design solutions that enhance user engagement, improve conversions, and elevate your digital presence.</p>
                    <div className="inner">
                        <div className="item">
                            <img src="img/ux.png" alt="" className="icon" />
                            <h3>Custom Web UI/UX Design Services</h3>
                            <p>As the best UI and UX design company, we comprehend the worth of design components for diverse businesses. Our proficient team of web UI/UX designers craft and customize web interfaces, user flows, visual designs, and prototypes to meet your project requirements.</p>
                        </div>
                        <div className="item">
                            <img src="img/mobile-app.png" alt="" className="icon" />
                            <h3>Mobile App UI/UX Design Services</h3>
                            <p>We are a seasoned UX agency providing comprehensive user-experience services for all types of mobile applications. Our team specializes in user journey mapping, research & analysis, interface design, and usability testing to deliver exceptional mobile app UI experiences.</p>
                        </div>
                        <div className="item">
                            <img src="img/responsive-app.png" alt="" className="icon" />
                            <h3>Responsive Website <br/>Designing</h3>
                            <p>Our responsive website design services help you expand your reach and deliver an exceptional mobile experience. Our UI/UX team crafts websites that look great and perform flawlessly across desktops, tablets, and smartphones.</p>
                        </div>
                        <div className="item">
                            <img src="img/web-design.png" alt="" className="icon" />
                            <h3>Website Redesign <br/>Services</h3>
                            <p>Our concept-to-prototype approach reduces risk, accelerates innovation, and ensures your AI solutions are business-ready before full-scale deployment.</p>
                        </div>
                        <div className="item">
                            <img src="img/web-page.png" alt="" className="icon" />
                            <h3>Custom Landing Page Design Services</h3>
                            <p>We design landing pages that captivate your audience, communicate your value, and drive conversions effectively.</p>
                        </div>
                        <div className="item">
                            <img src="img/product.png" alt="" className="icon" />
                            <h3>Design Prototypes</h3>
                            <p>We create interactive design prototypes that bring your ideas to life before development begins. Our prototypes help visualize user flows, refine functionality, and ensure a seamless experience that aligns perfectly with your business goals.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <Technologystack />

            <section className="services-4">
                <div className="container">
                    <h2 className="text-center">How We Create Intelligent AI Solutions</h2>
                    <p className="content-para">From strategy and concept to prototyping, development, and deployment, our approach ensures AI solutions are reliable, efficient, and impactful.</p>
                    <div>
                        <Tabs />
                    </div>

                </div>
            </section>

            <Cta />

            <Industries />

            <Footer />

        </>
    )
}

export default ResponsiveUiUx