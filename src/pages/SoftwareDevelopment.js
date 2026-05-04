import NavbarInnerPage from "../components/NavbarInnerPage";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Technologystack from "../components/Technologystack";
import Tabs from "../components/Tabs";
import Cta from "../components/Cta";
import Industries from "../components/Industries";

function SoftwareDevelopment() {
    return (
        <>
            <NavbarInnerPage />

            <div className="inner-hero">
                <div className="container">
                    <ul className="breadcrumb">
                        <li> <Link to="/">Home</Link> </li>
                        <li> <Link to="">Our Services</Link> </li>
                        <li> Custom Software Development</li>
                    </ul>
                    <h1>Building Smarter Businesses with Custom Software Solutions</h1>
                    <p className="content-para">Discover how custom software development can transform your business operations. From planning and design to deployment and support, our expert team delivers tailor-made solutions that fit your goals perfectly. Stay ahead of the competition with scalable, secure, and innovative software.</p>
                </div>
            </div>

            <section className="services-5">
                <div className="container">
                    <h2 className="text-center">
                        Custom Software Development Services
                    </h2>
                    <p className="content-para">We build tailor-made software solutions designed to meet your unique business needs. From concept to deployment, our expert team ensures scalability, performance, and innovation at every stage.</p>
                    <div className="inner">
                        <div className="item">
                            <img src="img/search-1.png" alt="" className="icon" />
                            <h3>Business Analysis and Consulting</h3>
                            <p>We analyze your business goals, processes, and challenges to design effective software strategies. Our consulting services help you identify opportunities, reduce risks, and maximize ROI.</p>
                        </div>
                        <div className="item">
                            <img src="img/application.png" alt="" className="icon" />
                            <h3>Custom Application Development</h3>
                            <p>We develop tailor-made applications that align perfectly with your business requirements. Our solutions are scalable, secure, and designed to enhance efficiency and drive growth.</p>
                        </div>
                        <div className="item">
                            <img src="img/ab-testing.png" alt="" className="icon" />
                            <h3>Enterprise Software Solutions</h3>
                            <p>Empower your organization with robust, scalable, and secure enterprise software. We build integrated systems that streamline operations, boost productivity, and support long-term business growth.</p>
                        </div>
                        <div className="item">
                            <img src="img/api.png" alt="" className="icon" />
                            <h3>API Development and Integration</h3>
                            <p>We design and integrate secure, scalable APIs to connect your software systems seamlessly. Enhance functionality, improve interoperability, and enable smooth data exchange across platforms.</p>
                        </div>
                        <div className="item">
                            <img src="img/integration.png" alt="" className="icon" />
                            <h3>Legacy System Modernization</h3>
                            <p>Upgrade outdated systems with modern technologies to enhance performance, security, and scalability. We help you transform legacy software into agile, future-ready digital solutions.</p>
                        </div>
                        <div className="item">
                            <img src="img/maintenance.png" alt="" className="icon" />
                            <h3>Software Maintenance and Support</h3>
                            <p>Ensure your software runs smoothly with our ongoing maintenance and support services. We handle updates, bug fixes, performance optimization, and technical assistance to keep your systems reliable and secure.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Technologystack />

            <section className="services-4">
                <div className="container">
                    <h2 className="text-center">How We Build Custom Software Development</h2>
                    <p className="content-para">Our Custom Software Developmen process is designed to deliver seamless,<br/> scalable, and high-performance apps that users love.</p>

                    <Tabs />

                </div>
            </section>

            <Cta />

            <Industries />

            <Footer />

        </>
    )
}

export default SoftwareDevelopment