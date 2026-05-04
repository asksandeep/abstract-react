import React from 'react'
import NavbarInnerPage from "../components/NavbarInnerPage";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <>
            <NavbarInnerPage />

            <div className="inner-hero">
                <div className="container">
                    <ul className="breadcrumb">
                        <li> <Link to="/">Home</Link> </li>
                        <li> Contact Us</li>
                    </ul>
                    <h1>Have Questions? Let’s Connect</h1>
                    <p className="content-para">We’d love to hear from you! Whether you have a question, need more details, or want to<br />discuss your next project, our team is here to help.</p>
                </div>
            </div>

            <section className="about-2 bgnone">
                <div className="container">
                    <h2>Worldwide Presence, Local Expertise</h2>
                    <p className="content-para">With operations in India and Germany, we bring world-class technology expertise to businesses across the globe. Our global footprint ensures seamless collaboration, faster delivery, and industry-specific insights — wherever you are.</p>
                    <div className="inner">
                        <div className="item">
                            <div className="country-title">
                                <div className="icon">
                                    <img src="img/india-pin.png" alt="" className="w-100"/>
                                </div>
                                <div>
                                    <h3>Development Office (India)</h3>
                                    <h4>AbstractIT Group</h4>
                                </div>
                            </div>
                            <ul className="address">
                                <li>
                                    <div className="icon"><i className="fa-solid fa-location-dot"></i></div>
                                    <p>Gajanan Dham, Khamla Road, Nagpur, Maharashtra, India. 440025</p>
                                </li>
                                <li>
                                    <div className="icon"><i className="fa-solid fa-phone"></i></div>
                                    <p> +91-9923290693 / +91-9096300320</p>
                                </li>
                                <li>
                                    <div className="icon"><i className="fa-solid fa-envelope"></i></div>
                                    <p> contact@abstractitgroup.com</p>
                                </li>
                            </ul>
                        </div>
                        <div className="item">
                            <div className="country-title">
                                <div className="icon">
                                    <img src="img/germany-pin.png" alt="" className="w-100"/>
                                </div>
                                <div>
                                    <h3>Germany</h3>
                                    <h4>AbstractIT Group</h4>
                                </div>
                            </div>
                            <ul className="address">
                                <li>
                                    <div className="icon"><i className="fa-solid fa-location-dot"></i></div>
                                    <p>Dimbeck Mulheim as der Ruhr - 45470</p>
                                </li>
                                <li>
                                    <div className="icon"><i className="fa-solid fa-phone"></i></div>
                                    <p> +49-1625956500</p>
                                </li>
                                <li>
                                    <div className="icon"><i className="fa-solid fa-envelope"></i></div>
                                    <p> contact@abstractitgroup.com</p>
                                </li>
                            </ul>
                        </div>

                        <div className="item">
                            <h3>Send Us a Message</h3>
                            <p>Fill out the form below and we'll get back to you within 24 hours.</p>
                            <form className="contactForm">
                                <div className="form-group">
                                    <input id="form_name" type="text" name="name" placeholder="Name" className="form-control" required data-error="Firstname is required." />
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group">
                                    <input id="form_email" type="email" name="email" placeholder="Email" className="form-control" required data-error="Valid email is required." />
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group">
                                    <input id="form_phone" type="tel" name="phone" placeholder="Phone" className="form-control" required />
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="ser" placeholder="Service Intrested In" className="form-control" />
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group">
                                    <textarea rows={4} id="form_message" name="message" className="form-control" placeholder="Message" required data-error="Please,leave us a message."></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <button type="submit" className="contactsubmitBtn">Send Message</button>
                            </form>
                        </div>

                        <div className="item">
                            <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d553.3150444541279!2d79.05328652249993!3d21.102792413914315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1763968355845!5m2!1sen!2sin" width="100%" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </>
    )
}
