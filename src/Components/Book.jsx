import React, {useState, useEffect} from 'react';
import './Book.css'
import CustomDropdown from "./CustomDropdown";
import { IoClose } from "react-icons/io5";
import axios from 'axios';

const Book = ({show, setShow}) => {
    const API_URL = import.meta.env.VITE_API_URL;
      const service = [
        { value: "dental checkup", label: "Dental Checkup" },
        { value: "root canal", label: "Root Canal" },
        { value: "dental implant", label: "Dental Implant" },
        { value: "cosmetic treatment", label: "Cosmetic Treatment" },
    ];
    const slot = [
        { value: "08:00 - 08:30", label: "08:00 - 08:30" },
        { value: "08:30 - 09:00", label: "08:30 - 09:00" },
        { value: "09:00 - 09:30", label: "09:00 - 09:30" },
        { value: "09:30 - 10:00", label: "09:30 - 10:00" },
        { value: "10:00 - 10:30", label: "10:00 - 10:30" },
        { value: "10:30 - 11:00", label: "10:30 - 11:00" },
        { value: "11:00 - 11:30", label: "11:00 - 11:30" },
        { value: "11:30 - 12:00", label: "11:30 - 12:00" },
        { value: "12:00 - 12:30", label: "12:00 - 12:30" },
        { value: "12:30 - 13:00", label: "12:30 - 13:00" },
        { value: "13:00 - 13:30", label: "13:00 - 13:30" },
        { value: "13:30 - 14:00", label: "13:30 - 14:00" },
        { value: "14:00 - 14:30", label: "14:00 - 14:30" },
        { value: "14:30 - 15:00", label: "14:30 - 15:00" },
        { value: "15:00 - 15:30", label: "15:00 - 15:30" },
        { value: "15:30 - 16:00", label: "15:30 - 16:00" },
        { value: "16:00 - 16:30", label: "16:00 - 16:30" },
        { value: "16:30 - 17:00", label: "16:30 - 17:00" },
        { value: "17:00 - 17:30", label: "17:00 - 17:30" },
        { value: "17:30 - 18:00", label: "17:30 - 18:00" },
    ];
    const status = [
        { value: "new patient", label: "New Patient" },
        { value: "returning patient", label: "Returning Patient" },
    ];
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [selectedService, setSelectedService] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [emailConfirmation, setEmailConfirmation] = useState("");

    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [show]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookingData = {
        service: selectedService?.value || selectedService,
        name,
        email,
        phone,
        date,
        time: selectedSlot?.value || selectedSlot,
        status: selectedStatus?.value || selectedStatus,
    };
    try {
      const response = await axios.post(`${API_URL}/booking`, bookingData, { withCredentials: true});
      if (response.status === 201) {
        setSuccessMessage("✅ Booking saved! Sending confirmation email...");
        setErrorMessage("");
        try {
        await axios.post(`${API_URL}/send-email`, {to: email, subject: "Booking Confirmation", ...bookingData}, { withCredentials: true});
        setEmailConfirmation("✅ Confirmation email sent successfully! Please check your email.");
        } catch (emailError) {
            console.error("Email error:", emailError);
            setEmailConfirmation("❌ Booking saved but failed to send confirmation email.");
        }
        setName("");
        setEmail("");
        setPhone("");
        setDate("");
        setSelectedService(null);
        setSelectedSlot(null);
        setSelectedStatus(null);
     }
    } catch (error) {
      console.error("Error uploading form data:", error);
      if (error.response?.data?.errors) {
        const messages = error.response.data.errors.map(err => err.msg).join(" | ");
        setErrorMessage(messages);
      } else {
        setErrorMessage(error.response?.data?.message || "❌ Something went wrong. Please try again.");
      }
    }
  };

   return (
    <>{show && ( 
      <section className='booking'>
        <form className='form' onSubmit={handleSubmit}>
            <div className='header'>
                <h2>Appointment</h2>
                <IoClose onClick={() => {setShow(false); setEmailConfirmation(null); setSuccessMessage(null); setErrorMessage(null)}} className='close' />
            </div>
            <CustomDropdown options={service} value={selectedService} onChange={setSelectedService} placeholder="Select a Service"/>
            <label> Your Full Name <input type='text' value={name} onChange={(e) => setName(e.target.value)} required /></label>
            <label> Your Email <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required /></label>
            <label> Your Phone Number <input type='tel' value={phone} onChange={(e) => setPhone(e.target.value)} required /></label>
            <label> Select Date <input type='date' value={date} min={new Date().toISOString().split("T")[0]}  onChange={(e) => setDate(e.target.value)} required /></label>
            <CustomDropdown options={slot} value={selectedSlot} onChange={setSelectedSlot} placeholder="Select a Time"/>
            <CustomDropdown options={status} value={selectedStatus} onChange={setSelectedStatus} placeholder="Select Status"/>
            <button >Book Now</button>
            {successMessage && <div className="success">{successMessage}</div>}
            {errorMessage && <div className="error">{errorMessage}</div>}
            {emailConfirmation && <div className="success">{emailConfirmation}</div>}
        </form>
      </section>
    )} </>
   )
}
export default Book