import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import WebAppDevelopment from "./pages/WebAppDevelopment";
import AIautomation from "./pages/AIautomation";
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
import ResponsiveUiUx from "./pages/ResponsiveUiUx";
import QaTestingSecurity from "./pages/QaTestingSecurity";
import HealthCareConsultation from "./pages/HealthCareConsultation";
import DigitalMarketing from "./pages/DigitalMarketing";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import HireDevelopers from "./pages/HireDevelopers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/web-app-development" element={<WebAppDevelopment />} />
        <Route path="/ai-automation" element={<AIautomation />} />
        <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
        <Route path="/responsive-uiux" element={<ResponsiveUiUx />} />
        <Route path="/qa-testing-security" element={<QaTestingSecurity />} />
        <Route path="/health-care-consultation" element={<HealthCareConsultation />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/software-development" element={<SoftwareDevelopment />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hire-developers" element={<HireDevelopers />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;