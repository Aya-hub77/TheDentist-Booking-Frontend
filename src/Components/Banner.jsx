import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Banner.css'
import { IoIosCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const Banner = () => {
  const API_URL = import.meta.env.VITE_API_URL;
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

  useEffect(() => {
    const bannerData = async () => {
      try {
        const res = await axios.get(`${API_URL}/contact`, { withCredentials: true });
        setPhone(res.data.phone);
        setAddress(res.data.address);
      } catch (err) {
        console.error(err);
      }
    };
    bannerData();
  }, [API_URL]);

   return (
      <header className='banner'>
        <div><IoIosCall className='icon' aria-hidden="true" /><p>{phone}</p></div>
        <div><IoLocationSharp className='icon' aria-hidden="true" /><p>{address}</p></div>
      </header>
   )
}
export default Banner