import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios.get(`${API_URL}/stats`, { withCredentials: true })
      .then(() => setAuthorized(true))
      .catch(() => {
        setAuthorized(false);
        navigate("/login", { replace: true });
      })
      .finally(() => setLoading(false));
  }, [API_URL, navigate]);

  if (loading) return null;
  return authorized ? children : null;
};
export default PrivateRoute;