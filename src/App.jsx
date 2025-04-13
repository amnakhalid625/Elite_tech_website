import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Home from './pages/home/Home';
import Capability from './pages/capabilities/Capability';
import CaseStudy from './pages/caseStudy/CaseStudy';
import Bell from './pages/bell/bell';
import About from './pages/about/AboutUs';
import Purpose from './pages/purpose/Purpose';
import Services from "./pages/services/Services";
import Footer from './pages/footer/Footer';
import TestimonialSection from './pages/testimonial/Testimonial';
import ContactSection from './pages/contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Capability />
            <CaseStudy />
            <About />
            <Purpose />
            <Services />
            <Bell />
            <TestimonialSection />
            <Footer />
          </>
        } />

        <Route path="/contact" element={<ContactSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
