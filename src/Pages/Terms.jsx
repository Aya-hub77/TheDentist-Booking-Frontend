import React, {useState, useEffect} from 'react'
import '../Components/legalPage.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Terms = () => {
    const API_URL = "/api";
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    useEffect(() => {
        const contactData = async () => {
            try {
                const res = await axios.get(`${API_URL}/contact`, {withCredentials: true});
                setEmail(res.data.email);
                setPhone(res.data.phone);
                setAddress(res.data.address);
            } catch (err) {
                console.error(err);
            }
        };
        contactData();
    }, [API_URL]);

    useEffect(() => { document.title = "TheDentist - Terms&Conditions"; }, []);

   return (
      <div className='legal'>
        <nav className='nav'>
            <img src={logo} alt="logo" loading='lazy'/>
            <Link to="/"><button>Home Page</button></Link>
        </nav>
        <main>
            <h1>Terms & Conditions</h1>
            <h5>Effective Date: January 15, 2026</h5>
            <p>Welcome to TheDentist. By accessing or using our website and online booking system, you agree to be bound by these Terms & Conditions. Please read them carefully before booking an appointment.</p>
            <br/>
            <h2>1. Use of the Website</h2>
            <p>This website is provided for informational purposes and to allow users to book appointments with our clinic.</p>
            <p>By using this website, you agree that:</p>
            <ul>
                <li>You will provide accurate and complete information when booking an appointment</li>
                <li>You will not misuse or attempt to disrupt the website or booking system</li>
                <li>You are legally capable of entering into a binding agreement</li>
            </ul>
            <br/>
            <h2>2. Online Booking System</h2>
            <p>Our online booking system allows you to request appointments for clinical services.</p>
            <h3>Booking Confirmation</h3>
            <p>Your appointment is confirmed only once you receive a confirmation via email</p>
            <h3>Accuracy of Information</h3>
            <p>You are responsible for ensuring that all information you provide (name, contact details, service type, date, and time) is correct.</p>
            <br/>
            <h2>3. Cancellation, Rescheduling & No-Show Policy</h2>
            <p>Appointments may be canceled or rescheduled by contacting us at : </p>
            <ul>
                <li>Email: contact@thedentist.fr</li>
                <li>Phone: 01 23 45 67 89</li>
            </ul>
            <p>Cancellations must be made at least 24 hours in advance</p>
            <p>Failure to attend an appointment without notice may result in cancellation of future bookings</p>
            <br/>
            <h2>4. Medical Disclaimer</h2>
            <h3>No Medical Advice</h3>
            <p>The content on this website, including service descriptions, is provided for general informational purposes only and does not constitute medical or dental advice.</p>
            <h3>No Diagnosis or Treatment Online</h3>
            <ul>
                <li>Booking an appointment does not establish a doctor–patient relationship</li>
                <li>No diagnosis, treatment, or medical decision is made through this website</li>
                <li>All medical and dental services are provided in person by licensed professionals</li>
            </ul>
            <h3>Emergencies</h3>
            <p>This website and booking system are not intended for medical emergencies.</p>
            <p>If you are experiencing a medical or dental emergency, please contact emergency services immediately.</p>
            <br/>
            <h2>5. Clinic Services</h2>
            <p>All services are subject to:</p>
            <ul>
                <li>Professional medical evaluation</li>
                <li>Clinical suitability</li>
                <li>Availability of qualified staff</li>
            </ul>
            <p>The clinic reserves the right to refuse or discontinue services when medically appropriate or required by law.</p>
            <br/>
            <h2>6. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law TheDentist shall not be liable for:</p>
            <ul>
                <li>Technical errors or temporary unavailability of the website</li>
                <li>Missed appointments due to incorrect user-provided information</li>
                <li>Delays or failures caused by factors beyond our control</li>
            </ul>
            <p>Use of this website is at your own risk.</p>
            <br/>
            <h2>7. Privacy</h2>
            <p>Your use of this website is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal data.</p>
            <p>By using our website, you consent to our data practices as described in the Privacy Policy.</p>
            <br/>
            <h2>8. Intellectual Property</h2>
            <p>All content on this website, including text, logos, and design elements, is the property of TheDentist and may not be copied or reused without written permission.</p>
            <br/>
            <h2>9. Changes to These Terms</h2>
            <p>We reserve the right to update or modify these Terms & Conditions at any time.</p>
            <p>Any changes will be posted on this page with an updated effective date.</p>
            <p>Continued use of the website constitutes acceptance of the revised terms.</p>
            <br/>
            <h2>10. Governing Law</h2>
            <p>These Terms & Conditions are governed by and interpreted in accordance with the laws of France, without regard to conflict of law principles.</p>
            <br/>
            <h2>11. Contact Information</h2>
            <p>If you have questions about these Terms & Conditions, please contact us:</p>
            <ul>
                <li>Clinic Name: TheDentist</li>
                <li>Email: {email}</li>
                <li>Phone: {phone}</li>
                <li>Address: {address}</li>
            </ul>
        </main>
        <footer className='foot'>
            <p>Copyright© {currentYear} TheDentist. | All Rights Reserved</p>
            <div>
            <Link to="/privacy-policy" className='item'>Privacy Policy</Link>
            <span> | </span>
            <Link to="/terms&conditions" className='item'>Terms & Conditions</Link>
            </div>
        </footer>
      </div>
   )
}
export default Terms