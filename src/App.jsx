import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar"
import Home from './pages/home/Home'
import Capability from './pages/capabilities/Capability'
// import Model from './pages/operating-model/Model'
import Talent from './pages/talent/Talent'
import Next from './pages/next/Next'
import Bell from './pages/bell/bell';
import Purpose from './pages/purpose/Purpose'
import About from './pages/about/AboutUs'
import Services from "./pages/services/Services"
import Footer from './pages/footer/Footer'
import TestimonialSection from './pages/testimonial/Testimonial';
import ContactSection from './pages/contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Only use Routes + Route if you're doing PAGE ROUTING */}
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Capability />
            {/* <Model /> */}
            <Talent />
            <Next />
            <Bell />
            <About />
            <Purpose />
            <Services />
            <TestimonialSection />
            <Footer />
          </>
        } />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
