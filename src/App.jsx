import Navbar from "./componens/Navbar"
import Home from "./componens/Home"
import About from "./componens/About"
import Anime from "./componens/Anime"
import ContactMe from "./componens/Contact"
import Footer from "./componens/Footer"

import Reveal from "reveal.js"
import 'reveal.js/dist/reveal.css';

function App() {
  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Anime/>
     <ContactMe/>
     <Footer/>
    </>
  )
}

export default App
