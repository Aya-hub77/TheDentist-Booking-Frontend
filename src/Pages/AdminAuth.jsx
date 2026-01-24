import React, {useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../Components/AdminAuth.css'

const AdminAuth = () => {
    const API_URL = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${API_URL}/login`, { email, password }, { withCredentials: true });
            console.log(res);
            navigate("/admin", { replace: true });
        } catch (err) {
            setError(err.response?.data?.message || "Login failed");
        }
    };

    useEffect(() => { document.title = "TheDentist - Admin Login"; }, []);

   return (
      <div className='admin-auth'>
        <form onSubmit={handleSubmit}>
            <h2>Admin Login</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <label>Email<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" /></label>
            <label>Password<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password"/></label>
            <button type='submit'>Submit</button>
        </form>
      </div>
   )
}
export default AdminAuth