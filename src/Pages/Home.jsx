import { useState } from "react"
import About from "../Components/About"
import Banner from "../Components/Banner"
import Contact from "../Components/Contact"
import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"
import Services from "../Components/Services"
import Testimonials from "../Components/Testimonials"
import Book from "../Components/Book"

const Home = () => {
    const [show, setShow] = useState(false);
   return (
      <div>
        <Banner />
        <Navbar show={show} setShow={setShow} />
        <Hero show={show} setShow={setShow} />
        <Services />
        <About />
        <Testimonials />
        <Contact />
        <Book show={show} setShow={setShow} />
      </div>
   )
}
export default Home