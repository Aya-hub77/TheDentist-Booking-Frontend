import React, { useState } from "react"
import logo from "../assets/logo.png"
import './Admin.css'

const AdminNav = () => {
    const [open, setOpen] = useState(false);
   return (
      <nav className="admin-nav">
        <div className="logo">
            <img src={logo} alt="logo" loading='lazy'/>
            <h1>Dashboard</h1>
        </div>
        <button className="hamburger" onClick={() => setOpen(!open)} aria-expanded={open}>{open ? "✕" : "☰"}</button>
        <ul className={`nav-links ${open ? "open" : ""}`}>
            <li><a href="#appointments" onClick={() => setOpen(false)}>APPOINTMENTS</a></li>
            <li><a href="#analytics" onClick={() => setOpen(false)}>ANALYTICS</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)}>CONTACT</a></li>
            <li><a href="#settings" onClick={() => setOpen(false)}>SETTINGS</a></li>
        </ul>
      </nav>
   )
}
export default AdminNav