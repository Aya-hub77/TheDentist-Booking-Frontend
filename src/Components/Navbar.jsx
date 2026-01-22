import './Navbar.css'
import { useState } from 'react';
import logo from '../assets/logo.png'

const Navbar = ({setShow}) => {
    const [open, setOpen] = useState(false);
   return (
      <nav className='navbar'>
        <img src={logo} alt="logo"/>
        <button className="hamburger" onClick={() => setOpen(!open)} aria-expanded={open}>{open ? "✕" : "☰"}</button>
        <ul className={`nav-links ${open ? "open" : ""}`}>
            <li><a href="#about" onClick={() => setOpen(false)}>ABOUT</a></li>
            <li><a href="#services" onClick={() => setOpen(false)}>SERVICES</a></li>
            <li><a href="#testimonials" onClick={() => setOpen(false)}>TESTIMONIALS</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)}>CONTACT</a></li>
        </ul>
        <button type='button' className='book' onClick={(e) => { e.stopPropagation(); setShow(prev =>!prev);}}>Book Now</button>
      </nav>
   )
}
export default Navbar