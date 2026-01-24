import React, {useState, useEffect} from 'react'
import './Admin.css'
import CustomDropdown from './CustomDropdown'
import axios from 'axios'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const AdminSections = () => {
    const API_URL = "/api";
    const [filter, setFilter] = useState("");
    const period = [
        { value: "today", label: "Today" },
        { value: "this week", label: "This Week" },
        { value: "this month", label: "This Month" },
        { value: "all", label: "View All" },
    ];
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axios.get(`${API_URL}/appointments`, { withCredentials: true });
                setAppointments(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchAppointments();
    }, [API_URL]);
    const filteredAppointments = appointments.filter(app => {
        const appDate = new Date(app.date);
        const now = new Date();

        if (filter === 'today') {
            return appDate.toDateString() === now.toDateString();
        }
        if (filter === 'this week') {
            const startOfWeek = new Date(now);
            startOfWeek.setDate(now.getDate() - now.getDay());
            const endOfWeek = new Date(startOfWeek);
            endOfWeek.setDate(startOfWeek.getDate() + 6);
            return appDate >= startOfWeek && appDate <= endOfWeek;
        }
        if (filter === 'this month') {
            return appDate.getMonth() === now.getMonth() && appDate.getFullYear() === now.getFullYear();
        }
        return true;
    });

    const [monthly, setMonthly] = useState([]);
    const [services, setServices] = useState([]);
  useEffect(() => {
    const fetchAnalytics = async () => {
        try {
        const res = await axios.get(`${API_URL}/analytics`, { withCredentials: true });
        setMonthly(res.data.monthly);
        setServices(res.data.services);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAnalytics();
  }, [API_URL]);
  const COLORS = ["#E08DCC", "#99C6F7", "#77EDA7", "#E0725E", "#FFD700", "#FF6347"];


  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [workingHours, setWorkingHours] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [mapLink, setMapLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contactData = {};
      if (phone) contactData.phone = phone;
      if (address) contactData.address = address;
      if (email) contactData.email = email;
      if (workingHours) contactData.workingHours = workingHours;
      if (facebook) contactData.facebook = facebook;
      if (twitter) contactData.twitter = twitter;
      if (instagram) contactData.instagram = instagram;
      if (mapLink) contactData.mapLink = mapLink;
      try {
        const res = await axios.patch(`${API_URL}/contact`, contactData, { withCredentials: true });
        console.log(res);
        alert("Contact info updated successfully!");
      } catch (error) {
        console.error(error);
        alert("Failed to update contact info");
      };
  };
  

const logout = async () => {
    await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
};
const handleLogout = async () => {
  try {
    await logout();
    window.location.href = "/login";
  } catch (err) {
    console.error("Logout failed:", err);
  }
};

    const [oldEmail, setOldEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

  const changeEmail = async (e) => {
    e.preventDefault();
    const payload = { oldEmail, newEmail, confirmEmail };
    try {
      const response = await axios.post(`${API_URL}/changeEmail`, payload, { withCredentials: true });
      console.log("Server response:", response.data);
      alert('Email updated successfully');
    } catch (error) {
      console.error("Error changing Email:", error);
      alert('Error updating email, try again!');
    }
  };

  const changePassword = async (e) => {
    e.preventDefault();
    const payload = { oldPassword, newPassword, confirmPassword };
    try {
      const response = await axios.post(`${API_URL}/changePassword`, payload, { withCredentials: true });
      console.log("Server response:", response.data);
      alert('Password updated successfully');
    } catch (error) {
      console.error("Error changing Password:", error);
      alert('Error updating password, try again!');
    }
  };

   return (
      <div>
        <section className='admin-appointments' id='appointments'>
            <h3>Appointments</h3>
            <CustomDropdown options={period} value={filter} onChange={(selected) => setFilter(selected.value)} placeholder="Today" className='dropdown'/>
            <div className="table-wrapper">
            <table className='appointments-table'>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Slot</th>
                    <th>Service</th>
                    <th>Status</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                {filteredAppointments.map((p) =>(
                <tr key={p._id}>
                    <td>{p.name}</td>
                    <td>{p.date}</td>
                    <td>{p.time}</td>
                    <td>{p.service}</td>
                    <td>{p.status}</td>
                    <td>{p.email}</td>
                    <td>{p.phone}</td>
                </tr>
                ))}
                </tbody>
            </table>
            </div>
        </section>
        <section className='admin-analytics' id='analytics'>
            <h3>Analytics</h3>
            <div className='charts'>
            <div className="chart">
                <h4>Patients</h4>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={monthly} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="patients" stroke="#8884d8" strokeWidth={2}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="chart">
                <h4>Services</h4>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie data={services} dataKey="number" nameKey="service" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                            {services.map((s, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/> ))}
                        </Pie>
                        <Legend />
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            </div>
        </section>
        <section className='admin-contact' id='contact'>
            <h3>Contact</h3>
            <form onSubmit={handleSubmit}>
                <div><label>Phone Number<input type="tel" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} /></label>
                <label>Address<input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} /></label></div>
                <div><label>Email<input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
                <label>Working Days/Hours<input type="text" name="workingHours" value={workingHours} onChange={(e) => setWorkingHours(e.target.value)} /></label></div>
                <div><label>Facebook Link<input type="text" name="facebook" value={facebook} onChange={(e) => setFacebook(e.target.value)} /></label>
                <label>Instagram Link<input type="text" name="instagram" value={instagram} onChange={(e) => setInstagram(e.target.value)} /></label></div>
                <div><label>Twitter Link<input type="text" name="twitter" value={twitter} onChange={(e) => setTwitter(e.target.value)} /></label>
                <label>Map<input type="text" name="mapLink" value={mapLink} onChange={(e) => setMapLink(e.target.value)} /></label></div>
                <button type='submit'>Change Contact Info</button>
            </form>
        </section>
        <section className='admin-settings' id='settings'>
            <div className='header'>
                <h3>Settings</h3>
                <button onClick={handleLogout}>Log out</button>
            </div>
            <h4>Change Email</h4>
            <form onSubmit={changeEmail}>
                <div><label>Current Email<input type="email" value={oldEmail} onChange={(e) => setOldEmail(e.target.value)}  /></label>
                <label>New Email<input type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} /></label>
                <label>Confirm New Email<input type="email" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} /></label></div>
                <button type='submit'>Submit New Email</button>
            </form>
            <h4>Change Password</h4>
            <form onSubmit={changePassword}>
                <div><label>Current Password<input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} /></label>
                <label>New Password<input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} /></label>
                <label>Confirm New Password<input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /></label></div>
                <button type='submit'>Submit New Password</button>
            </form>
        </section>
      </div>
   )
}
export default AdminSections