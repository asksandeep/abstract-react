import React from 'react'
import Navbar from './components/Navbar';
import Whoweare from './components/Whoweare';
import Homehero from './components/Homehero';
import Footer from './components/Footer';
import Homeservices from './components/Homeservices';
import Howwedeliver from './components/Howwedeliver';
import Whychooseus from './components/Whychooseus';
import Clientarea from './components/Clientarea';
import Technologystack from './components/Technologystack';
import Modelssection from './components/Modelssection';
import Cta from './components/Cta';
import Faq from './components/Faq';

function App() {
  return (
    <>
      <Navbar/>
      <Homehero/>
      <Whoweare/>
      <Homeservices/>
      <Howwedeliver/>
      <Whychooseus/>
      <Clientarea/>
      <Technologystack/>
      <Modelssection/>
      <Cta/>
      <Faq/>
      <Footer/>
    </>
  );
}

export default App;
