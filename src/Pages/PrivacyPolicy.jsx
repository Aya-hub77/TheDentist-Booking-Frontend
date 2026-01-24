import React, {useState, useEffect} from 'react'
import "../Components/legalPage.css"
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

const PrivacyPolicy = () => {
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

    useEffect(() => { document.title = "TheDentist - Privacy Policy"; }, []);

   return (
      <div className='legal'>
        <nav className='nav'>
            <img src={logo} alt="logo" loading='lazy'/>
            <Link to="/"><button>Home Page</button></Link>
        </nav>
        <main>
            <h1>Privacy Policy</h1>
            <h5>Effective Date: January 15, 2026</h5>
            <p>At TheDentist, your privacy is our top priority. This Privacy Policy explains how we collect, use, store, and protect the personal information you provide when using our website and online booking system.</p>
            <h2>1. Information We Collect</h2>
            <p>When you book an appointment on our website, we may collect the following personal information:</p>
            <ul>
                <li>Contact information: Name, email address, phone number</li>
                <li>Appointment details: Service type, preferred date and time</li>
                <li>Patient type: New or returning patient</li>
                <li>Technical data: IP address, browser type, and device information (for website performance and security)</li>
            </ul>
            <p>We do not collect sensitive health information beyond what is necessary to schedule your appointment.</p>
            <br/>
            <h2>2. How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <ul>
                <li>To schedule and manage your appointments</li>
                <li>To send appointment confirmations, reminders, and follow-ups</li>
                <li>To communicate updates about our clinic services</li>
                <li>To improve the functionality and security of our website</li>
            </ul>
            <p>We will never sell your personal information to third parties.</p>
            <br/>
            <h2>3. Legal Basis for Processing (for EU/UK users)</h2>
            <p>WWe process your personal data based on the following legal grounds:</p>
            <ul>
                <li>TConsent: You provide consent when you book an appointment on our website.</li>
                <li>Legitimate interests: To provide and manage our services efficiently.</li>
            </ul>
            <br/>
            <h2>4. Sharing Your Information</h2>
            <p>We may share your information with trusted third parties only when necessary, such as:</p>
            <ul>
                <li>Our staff and healthcare providers for appointment management</li>
                <li>Third-party service providers for sending emails</li>
            </ul>
            <p>All third-party providers are required to comply with data protection laws and maintain the confidentiality of your information.</p>
            <br/>
            <h2>5. Data Retention</h2>
            <p>We retain your personal information only for as long as necessary to:</p>
            <ul>
                <li>Provide our services</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes or enforce our agreements</li>
            </ul>
            <p>Typically, your booking information is stored for 2 years after your last appointment, unless otherwise required by law.</p>
            <br/>
            <h2>6. Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your data from unauthorized access, disclosure, alteration, or destruction, including:</p>
            <ul>
                <li>Secure server storage</li>
                <li>Restricted access to authorized personnel only</li>
            </ul>
            <br/>
            <h2>7. Cookies and Tracking</h2>
            <p>Our website may use cookies or analytics tools to enhance your browsing experience. You can manage or disable cookies through your browser settings.</p>
            <br/>
            <h2>8. Children’s Privacy</h2>
            <p>Our services are not intended for children under the age of 18. We do not knowingly collect personal information from minors.</p>
            <br/>
            <h2>9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised “Effective Date.”</p>
            <br/>
            <h2>10. Contact Us</h2>
            <p>If you have questions or concerns about this Privacy Policy or how your data is handled, please contact us:</p>
            <ul>
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
export default PrivacyPolicy