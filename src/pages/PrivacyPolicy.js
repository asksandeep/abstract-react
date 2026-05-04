import React from 'react'
import NavbarInnerPage from "../components/NavbarInnerPage";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function PrivacyPolicy() {
    return (
        <>
            <NavbarInnerPage />

            <div className="inner-hero">
                <div className="container">
                    <ul className="breadcrumb">
                        <li> <Link to="/">Home</Link> </li>
                        <li> Privacy Policy </li>
                    </ul>
                    <h1>Privacy Policy – AbstractIT Group</h1>
                </div>
            </div>

            <section className="entry-content">
                <div className="container">
                    <p>Last Updated: [November 26, 2025]</p>
                    <p>At <strong>AbstractIT Group</strong>, we are committed to protecting your privacy and ensuring that your personal information is handled safely and responsibly. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website or use our services.</p>
                    <h2>1. Introduction</h2>
                    <p>This Privacy Policy applies to all visitors, customers, and users of the AbstractIT Group website and services. By using our website, you agree to the practices described in this policy.</p>
                    <h2>2. Information We Collect</h2>
                    <p>We may collect the following types of information:</p>
                    <h3>a) Personal Information</h3>
                    <p>Information you voluntarily provide through forms, contact submissions, or service inquiries, including:</p>
                    <ul>
                        <li>Full name</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Company/organization name</li>
                        <li>Project-related details</li>
                    </ul>
                    <h3>b) Automatically Collected Information</h3>
                    <p>When you visit our website, we may automatically collect:</p>
                    <ul>
                        <li>IP address</li>
                        <li>Browser type and version</li>
                        <li>Device type</li>
                        <li>Pages visited</li>
                        <li>Time spent on the website</li>
                        <li>Cookies and usage data</li>
                    </ul>
                    <h3>c) Cookies & Tracking Technologies</h3>
                    <p>We use cookies and similar technologies to:</p>
                    <ul>
                        <li>Improve user experience</li>
                        <li>Analyze website traffic</li>
                        <li>Offer personalized content</li>
                    </ul>
                    <p>You can disable cookies in your browser settings at any time.</p>
                    <h2>3. How We Use Your Information</h2>
                    <p>We use collected information to:</p>
                    <ul>
                        <li>Provide and improve our software development services</li>
                        <li>Respond to inquiries and support requests</li>
                        <li>Customize website user experience</li>
                        <li>Send updates, newsletters, or promotional content (only if you opt-in)</li>
                        <li>Analyze website performance and user behavior</li>
                        <li>Ensure security and prevent fraudulent activities</li>
                    </ul>
                    <p>We <strong>do not sell or rent</strong> your personal information.</p>
                    <h2>4. Legal Basis for Processing (For GDPR Users)</h2>
                    <p>If you are accessing our website from Europe (EU/EEA), we process your information based on:</p>
                    <ul>
                        <li>Your consent</li>
                        <li>Performance of a contract</li>
                        <li>Compliance with legal obligations</li>
                        <li>Legitimate business interests</li>
                    </ul>
                    <h2>5. Sharing & Disclosure of Information</h2>
                    <p>We may share your information with:</p>
                    <ul>
                        <li>Trusted third-party service providers (hosting, analytics, email services)</li>
                        <li>Legal authorities when required by law</li>
                        <li>Business partners for project collaboration (with your consent)</li>
                    </ul>
                    <p>All partners follow strict confidentiality and security standards.</p>
                    <p>We never <strong>share</strong> personal information for marketing purposes without your permission.</p>
                    <h2>6. Data Storage & Security</h2>
                    <p>We implement industry-standard security measures to protect your data, including:</p>
                    <ul>
                        <li>Encryption</li>
                        <li>Access control</li>
                        <li>Secure servers</li>
                        <li>Regular security audits</li>
                    </ul>
                    <p>Although we take all measures to safeguard your data, no method of transmission over the internet is 100% secure.</p>
                    <h2>7. Your Rights</h2>
                    <p>Depending on your region (GDPR, CCPA, etc.), you may have rights such as:</p>
                    <ul>
                        <li>Accessing your data</li>
                        <li>Updating or correcting your information</li>
                        <li>Requesting data deletion</li>
                        <li>Withdrawing consent</li>
                        <li>Opting out of marketing communication</li>
                    </ul>
                    <p>To exercise these rights, contact us at: <a href="mailto:info@abstractitgroup.com">info@abstractitgroup.com</a></p>
                    <h2>8. Third-Party Links</h2>
                    <p>Our website may contain links to external websites. We are not responsible for their content, privacy policies, or practices. We encourage users to review those websites’ policies before interacting with them.</p>
                    <h2>9. Children's Privacy</h2>
                    <p>Our services are not directed at children under 13. We do not knowingly collect personal information from children.</p>
                    <h2>10. Changes to This Policy</h2>
                    <p>We may update this Privacy Policy from time to time. Any updates will be posted on this page with the updated date.</p>
                    <h2>11. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy or how your data is handled, feel free to contact us:</p>

                    <p><strong>Abstract IT Group</strong><br />
                        <strong>Email:</strong> <a href="mailto:info@abstractitgroup.com">info@abstractitgroup.com</a><br />
                        <strong>Phone:</strong> <a href="tel:+91-9923290693">+91-9923290693</a> / <a href="tel:+91-9096300320">+91-9096300320</a><br />
                        <strong>Website:</strong> <a href="https://www.abstractitgroup.com/" target="_black">www.abstractitgroup.com</a>
                    </p>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default PrivacyPolicy