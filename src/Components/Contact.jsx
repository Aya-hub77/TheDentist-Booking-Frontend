import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Contact.css'
import { FaSquarePhone, FaSquareInstagram, FaSquareTwitter, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Contact = () => {
  const API_URL = import.meta.env.VITE_API_URL;
    const currentYear = new Date().getFullYear();

    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [workingHours, setWorkingHours] = useState("");
    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("");
    const [twitter, setTwitter] = useState("");
    const [mapLink, setMapLink] = useState("");

  useEffect(() => {
    const contactData = async () => {
      try {
        const res = await axios.get(`${API_URL}/contact`, { withCredentials: true });
        setPhone(res.data.phone);
        setAddress(res.data.address);
        setEmail(res.data.email);
        setWorkingHours(res.data.workingHours);
        setFacebook(res.data.facebook);
        setInstagram(res.data.instagram);
        setTwitter(res.data.twitter);
        setMapLink(res.data.mapLink);
      } catch (err) {
        console.error(err);
      }
    };
    contactData();
  }, [API_URL]);

   return (
      <footer>
        <div className='contact' id='contact'>
            <div className='contact-info'>
                <h2>Contact Us</h2>
                <div className='item'><FaSquarePhone className='icon' aria-hidden="true" /><p>{phone}</p></div>
                <div className='item'><MdEmail className='icon' aria-hidden="true" /><p>{email}</p></div>
                <div className='item'><FaLocationDot className='icon' aria-hidden="true" /><p>{address}</p></div>
                <h3>{workingHours}</h3>
                <div className='socials'>
                    <a href={facebook}><FaFacebook className='icon facebook' aria-hidden="true" /></a>
                    <a href={instagram}><FaSquareInstagram className='icon instagram' aria-hidden="true" /></a>
                    <a href={twitter}><FaSquareTwitter className='icon twitter' aria-hidden="true"/></a>
                </div>
            </div>
            <div className='map'>
                <iframe src={mapLink} title='Our Location in Google Maps' allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <div className="legal-links">
            <p className='copyright'>Copyright© {currentYear} TheDentist. | All Rights Reserved</p>
            <div>
            <Link to="/privacy-policy" className='item'>Privacy Policy</Link>
            <span> | </span>
            <Link to="/terms&conditions" className='item'>Terms & Conditions</Link>
            </div>
        </div>
      </footer>
   )
}
export default Contact