import { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home"
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Terms from './Pages/Terms';
import ScrollToTop from './Components/ScrollToTop';
import Admin from './Pages/Admin';
import AdminAuth from './Pages/AdminAuth';
import PrivateRoute from './Components/PrivateRoute';

const App = () => {
  const API_URL = import.meta.env.VITE_API_URL;

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    axios.get(`${API_URL}/me`, { withCredentials: true })
      .then(res => setUser(res.data.user))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, [API_URL]);

  if (loading) return <div>Loading...</div>;

   return (
    <>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/admin" element={<PrivateRoute user={user} ><Admin /></PrivateRoute>} />
        <Route path="/login" element={<AdminAuth setUser={setUser} user={user} />} />
      </Routes>
    </>
   )
}
export default App