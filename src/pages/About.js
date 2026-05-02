import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <section className="inner-banner">
        <h1>About Us</h1>
      </section>

      <section>
        <p>About page content...</p>
      </section>

      <Footer />
    </>
  );
}

export default About;