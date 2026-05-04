import NavbarInnerPage from "../components/NavbarInnerPage";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Career() {
    return (
        <>
            <NavbarInnerPage />

            <div className="inner-hero">
                <div className="container">
                    <ul className="breadcrumb">
                        <li> <Link to="/">Home</Link> </li>
                        <li> Career</li>
                    </ul>
                    <h1>The way to take new challenges, join our team.</h1>
                    <p className="content-para">AbstractIT Group is growing rapidly and it has continuously expanding<br />
                        need of qualified and highly dedicated professional.</p>
                </div>
            </div>

            <section className="career-page">
                <div className="container">
                    <div className="inner">
                        <div className="col-left">
                            <h2>Grow With Us</h2>
                            <p>We're always on the lookout for passionate, talented, and driven individuals who are ready to make an impact. At <strong>AbstractIT Group</strong>, we don’t just offer jobs — we offer careers where you can learn, grow, and thrive.</p>
                            <p>Whether you're an innovator, problem solver, creative thinker, or team player, you’ll find opportunities here to challenge yourself, contribute meaningfully, and be part of something bigger.</p>
                            <hr />
                            <h3>Why Join Us?</h3>
                            <ul>
                                <li><strong>Dynamic Work Culture:</strong> Collaborative, inclusive, and empowering.</li>
                                <li><strong>Learning & Development:</strong> Continuous upskilling with access to training, mentorship, and growth paths.</li>
                                <li><strong>Work That Matters:</strong> Be part of projects that make a difference.</li>
                            </ul>
                            <hr />
                            <h3>We're Hiring!</h3>
                            <p>Explore open positions across departments like:</p>
                            <ul>
                                <li>SEO and Social Media Professionals, Google Ads Experts</li>
                                <li>UI/UX and Web Designers</li>
                                <li>Sr. PHP Developers, Sr. WordPress and Shopify Developers</li>
                                <li>Node.JS Developer, React.JS Developer, React Native Developer</li>
                                <li>Business Development, Sales and Marketing</li>
                            </ul>
                            <hr />
                            <h3>Don’t see a role that fits?</h3>
                            <p>We're always happy to hear from great talent. Drop your resume at <a href="mailto:hr@abstractitgroup.com" className="mailtolink">hr@abstractitgroup.com</a></p>
                        </div>
                        <div className="col-right">
                            <div className="career-form">
                                <h4>Submit Resume</h4>
                                <form>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <input type="text" name="name" placeholder="Full Name" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="email" placeholder="Email Address" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <input type="Number" name="name" placeholder="Phone Number" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <div className="form-control">
                                                <input type="file" name="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <input type="text" name="name" placeholder="Job Title" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <input type="Number" name="Number" placeholder="Notice Period (Days)" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="name" placeholder="Current CTC (In Lakhs)" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control text-area" placeholder="Your Message"></textarea>
                                    </div>
                                    <button className="submitBtn">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </>
    )
}

export default Career