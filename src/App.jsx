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

function App() {


  return (
   <>
   <Navbar />
   <Home />
   <Capability />
   {/* <Model /> */}
   <Talent />
   <Next />
   <Bell />
   <Purpose />
   <About />
   <Services />

    </>
  )
}

export default App
