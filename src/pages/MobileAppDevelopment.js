import NavbarInnerPage from "../components/NavbarInnerPage";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Technologystack from "../components/Technologystack";
import Tabs from "../components/Tabs";
import SuccessStory from "../components/SuccessStory";
import Cta from "../components/Cta";
import Industries from "../components/Industries";

function MobileAppDevelopment() {
    return (
        <>
            <NavbarInnerPage />

            <div className="inner-hero">
                <div className="container">
                    <ul className="breadcrumb">
                        <li> <Link to="/">Home</Link> </li>
                        <li> <Link to="">Our Services</Link> </li>
                        <li> Mobile App Development </li>
                    </ul>
                    <h1> Mobile App Development</h1>
                    <p className="content-para">At AbstractIT Group, we specialize in developing innovative mobile applications tailored to the needs of modern communities. Our solutions are<br /> already making a real impact across Central India, delivering smart, user-friendly technology across multiple sectors:</p>

                    <div className="services-heighligher">
                        <div className="item">
                            <div className="icon">
                                <img src="img/android.png" alt="" className="w-100" />
                            </div>
                            <h3>Android App</h3>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <img src="img/apple.png" alt="" className="w-100" />
                            </div>
                            <h3>iOS App</h3>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <img src="img/react.png" alt="" className="w-100" />
                            </div>
                            <h3>React Native</h3>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <img src="img/hybrid.png" alt="" className="w-100" />
                            </div>
                            <h3>Hybrid App</h3>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <img src="img/cross-platform.png" alt="" className="w-100" />
                            </div>
                            <h3>Cross Platform</h3>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <img src="img/flutter.png" alt="" className="w-100" />
                            </div>
                            <h3>Flutter</h3>
                        </div>
                    </div>
                </div>
            </div>

            <section className="services-4">
                <div className="container">
                    <h2 className="text-center">
                        Our Success Stories
                    </h2>
                    <p className="content-para">Explore how we’ve helped businesses across industries turn their ideas into impactful digital solutions. Each project reflects our commitment to innovation, quality, and measurable results.</p>

                    <SuccessStory />
                    
                    <br />
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

            <Cta />

            <Industries />




            <Footer />

        </>
    )
}

export default MobileAppDevelopment