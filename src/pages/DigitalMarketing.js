import NavbarInnerPage from "../components/NavbarInnerPage";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Technologystack from "../components/Technologystack";
import Tabs from "../components/Tabs";
import Cta from "../components/Cta";
import Industries from "../components/Industries";

function DigitalMarketing() {
    return (
        <>
            <NavbarInnerPage />

            <div className="inner-hero">
                <div className="container">
                    <ul className="breadcrumb">
                        <li> <Link to="/">Home</Link> </li>
                        <li> <Link to="">Our Services</Link> </li>
                        <li> Digital Marketing</li>
                    </ul>
                    <h1>Top Digital Marketing Agency to Boost Your Brand</h1>
                    <p className="content-para">We help brands reach their full potential with innovative digital marketing strategies. From SEO and social media to PPC and content marketing, we drive growth and engagement. Trusted by businesses across India and beyond.</p>
                </div>
            </div>

            <section className="services-5">
                <div className="container">
                    <h2 className="text-center">
                        Bespoke Digital Marketing Services Designed for You
                    </h2>
                    <p className="content-para">Our custom digital marketing services are designed to meet your unique business needs. From SEO, PPC, and social media to content marketing and brand strategy, we create solutions that deliver real results.</p>
                    <div className="inner">
                        <div className="item">
                            <img src="img/search-engine-optimization.png" alt="" className="icon" />
                            <h3>Search Engine Optimization</h3>
                            <p>Improve your website’s visibility and attract more organic traffic with our professional SEO services. We optimize your site for search engines, enhance user experience, and implement strategies that help your business rank higher on Google.</p>
                        </div>
                        <div className="item">
                            <img src="img/pay-per-click.png" alt="" className="icon" />
                            <h3>Pay-Per-Click (PPC)</h3>
                            <p>Reach your target audience instantly with our expert PPC advertising services. We create and manage campaigns on Google Ads, Bing, and social media platforms to drive traffic, generate leads, and maximize ROI. Get measurable results with every click.</p>
                        </div>
                        <div className="item">
                            <img src="img/advertising.png" alt="" className="icon" />
                            <h3>Social Media Marketing</h3>
                            <p>Connect, engage, and grow your audience with our expert social media marketing services. We create tailored campaigns for platforms like Facebook, Instagram, LinkedIn, and Twitter to increase brand awareness, drive traffic, and generate leads.</p>
                        </div>
                        <div className="item">
                            <img src="img/social-media.png" alt="" className="icon" />
                            <h3>Content Marketing</h3>
                            <p>Attract, engage, and convert your audience with our expert content marketing services. We create high-quality, valuable content tailored to your brand and audience, videos, and more to drive traffic and boost conversions.</p>
                        </div>
                        <div className="item">
                            <img src="img/email.png" alt="" className="icon" />
                            <h3>Email Marketing</h3>
                            <p>Reach your customers directly with our result-driven email marketing services. We create personalized campaigns, newsletters, and promotional emails that engage your audience, nurture leads, and drive conversions for your business.</p>
                        </div>
                        <div className="item">
                            <img src="img/influencer.png" alt="" className="icon" />
                            <h3>Affiliate Marketing</h3>
                            <p>Boost your sales and brand reach with our performance-driven affiliate marketing services. We help you partner with trusted affiliates, track performance, and manage campaigns to generate leads, increase conversions, and grow revenue efficiently.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Technologystack />

            <section className="services-4">
                <div className="container">
                    <h2 className="text-center">How We Build Digital Marketing</h2>
                    <p className="content-para">Our Digital Marketing process is designed to deliver seamless, scalable, and high-performance apps that users love.</p>

                    <Tabs />

                </div>
            </section>

            <Cta />

            <Industries />

            <Footer />

        </>
    )
}

export default DigitalMarketing