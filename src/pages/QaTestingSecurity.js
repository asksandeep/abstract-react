import NavbarInnerPage from "../components/NavbarInnerPage";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Technologystack from "../components/Technologystack";
import Tabs from "../components/Tabs";
import Cta from "../components/Cta";
import Industries from "../components/Industries";

function QaTestingSecurity() {
    return (
        <>
            <NavbarInnerPage />

            <div className="inner-hero">
                <div className="container">
                    <ul className="breadcrumb">
                        <li> <Link to="/">Home</Link> </li>
                        <li> <Link to="">Our Services</Link> </li>
                        <li> QA Testing/Security </li>
                    </ul>
                    <h1>Seamless UI/UX Solutions for Your Business</h1>
                    <p className="content-para">Transform your vision into reality with our client-focused design experts. Abstract IT Group is a skilled UI/UX design company crafting websites with seamless, striking interfaces that enhance user experiences and drive goal conversions. Connect with our innovative UI/UX team today to bring your ideas to life.</p>
                </div>
            </div>

            <section className="services-5">
                <div className="container">
                    <h2 className="text-center">
                        We Provide QA Testing with 100% Quality Assurance!
                    </h2>
                    <p className="content-para">Our QA experts ensure every website and application meets the highest standards of performance, security, and usability — guaranteeing a flawless experience for your users.</p>
                    <div className="inner">
                        <div className="item">
                            <img src="img/functionality.png" alt="" className="icon" />
                            <h3>Functionality Testing</h3>
                            <p>We verify every feature of your website or application to ensure it works exactly as intended. Our team tests workflows, forms, links, and integrations to deliver a flawless and reliable user experience.</p>
                        </div>
                        <div className="item">
                            <img src="img/sharing.png" alt="" className="icon" />
                            <h3>Compatibility Testing</h3>
                            <p>We ensure your website or application performs seamlessly across all browsers, devices, and operating systems. Our team conducts thorough testing to deliver consistent functionality and user experience.</p>
                        </div>
                        <div className="item">
                            <img src="img/ab-testing1.png" alt="" className="icon" />
                            <h3>User Interface Testing</h3>
                            <p>We thoroughly test every visual and interactive element of your application to ensure a smooth, intuitive, and consistent user experience. Our team checks layouts, buttons, menus, and responsiveness across all devices.</p>
                        </div>
                        <div className="item">
                            <img src="img/speed.png" alt="" className="icon" />
                            <h3>Performance Testing</h3>
                            <p>We evaluate your website or application under varying loads to ensure optimal speed, stability, and scalability. Our testing process identifies bottlenecks and guarantees smooth performance even during peak traffic.</p>
                        </div>
                        <div className="item">
                            <img src="img/security.png" alt="" className="icon" />
                            <h3>Security Testing</h3>
                            <p>We perform comprehensive security testing to identify vulnerabilities and protect your website or application from potential threats. Our experts ensure your digital assets remain safe, secure, and compliant with industry.</p>
                        </div>
                        <div className="item">
                            <img src="img/comparison.png" alt="" className="icon" />
                            <h3>Content Testing</h3>
                            <p>We review and test all website content to ensure accuracy, clarity, and consistency. Our process ensures that text, images, and multimedia align with your brand voice and deliver the right message to your audience.</p>
                        </div>
                        <div className="item">
                            <img src="img/accessibility-testing.png" alt="" className="icon" />
                            <h3>Accessibility Testing</h3>
                            <p>We ensure your website or application is usable by everyone, including people with disabilities. Our testing process checks compliance with accessibility standards an inclusive and user-friendly experience.</p>
                        </div>
                        <div className="item">
                            <img src="img/placement.png" alt="" className="icon" />
                            <h3>Localization Testing</h3>
                            <p>We verify that your website or application works flawlessly across different languages, regions, and cultures. Our team ensures content, format, and functionality are perfectly adapted to each target market.</p>
                        </div>
                        <div className="item">
                            <img src="img/test.png" alt="" className="icon" />
                            <h3>Database Testing</h3>
                            <p>We thoroughly test your databases to ensure data integrity, accuracy, and performance. Our team validates data consistency, queries, and transactions to guarantee reliable and efficient database operations.</p>
                        </div>
                        <div className="item">
                            <img src="img/integration.png" alt="" className="icon" />
                            <h3>Integration Testing</h3>
                            <p>We verify that different modules and components of your application work together seamlessly. Our testing ensures smooth data flow, proper interaction, and performance across all integrated systems.</p>
                        </div>
                        <div className="item">
                            <img src="img/software-testing.png" alt="" className="icon" />
                            <h3>Workflow Testing</h3>
                            <p>We ensure your business processes and application workflows function smoothly from start to finish. Our testing identifies bottlenecks, validates process logic, and guarantees efficient, error-free operations.</p>
                        </div>
                        <div className="item">
                            <img src="img/product.png" alt="" className="icon" />
                            <h3>Cross-Platform Testing</h3>
                            <p>We ensure your application performs consistently across multiple platforms, devices, and operating systems. Our testing guarantees seamless functionality, usability, and a uniform user experience everywhere.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Cta />

            <Industries />

            <Footer />

        </>
    )
}

export default QaTestingSecurity