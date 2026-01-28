import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Banner.css'
import { IoIosCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const Banner = () => {
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

  useEffect(() => {
    const bannerData = async () => {
      try {
        const res = await axios.get("https://the-dentist-booking-frontend.vercel.app/api/contact", { withCredentials: true });
        setPhone(res.data.phone);
        setAddress(res.data.address);
      } catch (err) {
        console.error(err);
      }
    };
    bannerData();
  }, []);

   return (
      <header className='banner'>
        <div><IoIosCall className='icon' aria-hidden="true" /><p>{phone}</p></div>
        <div><IoLocationSharp className='icon' aria-hidden="true" /><p>{address}</p></div>
      </header>
   )
}
export default Banner