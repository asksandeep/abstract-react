import NavbarInnerPage from "../components/NavbarInnerPage";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Technologystack from "../components/Technologystack";
import Tabs from "../components/Tabs";
import Cta from "../components/Cta";
import Industries from "../components/Industries";

function HealthCareConsultation() {
    return (
        <>
            <NavbarInnerPage />

            <div className="inner-hero">
                <div className="container">
                    <ul className="breadcrumb">
                        <li> <Link to="/">Home</Link> </li>
                        <li> <Link to="">Our Services</Link> </li>
                        <li> Health Care Software </li>
                    </ul>
                    <h1>India’s Premier Healthcare Management Software</h1>
                    <p className="content-para">Manage your hospital or clinic effortlessly with India’s leading healthcare management software. Streamline patient records, appointments, billing, and reporting—all in one smart platform. Trusted by healthcare providers across the country.</p>
                </div>
            </div>

            <section className="services-5">
                <div className="container">
                    <h2 className="text-center">
                        Central India’s Trusted Healthcare Licensing & Accreditation Solutions Provider
                    </h2>
                    <p className="content-para" style={{ maxWidth: "1200px" }}>As a healthcare professional, your time is invaluable - and your focus belongs with your patients. Navigating the extensive requirements for healthcare licenses and accreditations can often feel overwhelming, involving complex regulations, numerous documents, and multiple government submissions. If the medical licensing process feels burdensome, partnering with a trusted healthcare licensing service can simplify the journey. With expert guidance, you can move through the process quickly, accurately, and with minimal disruption to your schedule.</p>

                    <p className="content-para mt-5" style={{maxWidth: "1200px", marginTop: "15px"}}>We are dedicated to easing this burden by streamlining every step of your medical licensing and accreditation process. Leave the detailed, time-consuming tasks to us. Our team ensures that your applications are completed efficiently, compliantly, and without unnecessary stress. so you can devote your energy to delivering exceptional patient care.</p>

                    <div className="inner">
                        <div className="item">
                            <img src="img/registration.png" alt="" className="icon" />
                            <h3>Patient Registration</h3>
                            <p>Easily capture and manage patient details, medical history, and demographics. Streamline appointment scheduling and check-ins to ensure a smooth and efficient patient onboarding process.</p>
                        </div>
                        <div className="item">
                            <img src="img/meeting.png" alt="" className="icon" />
                            <h3>Appointment Scheduling</h3>
                            <p>Manage doctor and patient appointments efficiently with automated scheduling, reminders, and calendar integration. Reduce wait times and avoid double-booking for a seamless patient experience.</p>
                        </div>
                        <div className="item">
                            <img src="img/medical-report.png" alt="" className="icon" />
                            <h3>Electronic Health Records</h3>
                            <p>Maintain comprehensive digital records of patient medical history, treatments, and lab results. Enable secure, instant access for healthcare providers to deliver accurate and timely care.</p>
                        </div>
                        <div className="item">
                            <img src="img/invoice.png" alt="" className="icon" />
                            <h3>Billing and Invoicing</h3>
                            <p>Automate billing for consultations, treatments, lab tests, and pharmacy. Generate invoices quickly, manage payments efficiently, and integrate with insurance claims for seamless financial operations.</p>
                        </div>
                        <div className="item">
                            <img src="img/management-service.png" alt="" className="icon" />
                            <h3>Laboratory Management</h3>
                            <p>Streamline lab operations with efficient sample tracking, test management, and report generation. Integrate lab results with patient records for accurate and timely healthcare delivery.</p>
                        </div>
                        <div className="item">
                            <img src="img/medical-prescription.png" alt="" className="icon" />
                            <h3>Pharmacy Management</h3>
                            <p>Manage medicine inventory, prescriptions, and sales efficiently. Track stock levels, monitor expirations, and ensure seamless integration with patient records and billing systems.</p>
                        </div>
                        <div className="item">
                            <img src="img/inventory.png" alt="" className="icon" />
                            <h3>Inventory Management</h3>
                            <p>Track and manage medical supplies, equipment, and consumables efficiently. Automate reordering, monitor stock levels, and ensure seamless availability for smooth hospital operations.</p>
                        </div>
                        <div className="item">
                            <img src="img/people1.png" alt="" className="icon" />
                            <h3>Staff Management</h3>
                            <p>Manage hospital staff efficiently, including scheduling, attendance, payroll, and performance tracking. Ensure smooth workforce operations and optimal resource allocation.</p>
                        </div>
                        <div className="item">
                            <img src="img/patient.png" alt="" className="icon" />
                            <h3>Patient Portal</h3>
                            <p>Provide patients with secure access to their medical records, test results, appointments, and communication with doctors. Enhance engagement and empower patients to manage their healthcare conveniently.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Technologystack/>

            <section className="services-4">
                <div className="container">
                    <h2 className="text-center">How We Build Healthcare Management Software</h2>
                    <p className="content-para">Our Healthcare Management Software process is designed to deliver seamless, scalable, and high-performance apps that users love.</p>

                    <Tabs />

                </div>
            </section>

            <Cta />

            <Industries />

            <Footer />

        </>
    )
}

export default HealthCareConsultation