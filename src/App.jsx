import {Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home"
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Terms from './Pages/Terms';
import ScrollToTop from './Components/ScrollToTop';
import Admin from './Pages/Admin';
import AdminAuth from './Pages/AdminAuth';
import PrivateRoute from './Components/PrivateRoute';

const App = () => {
   return (
    <>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
        <Route path="/login" element={<AdminAuth />} />
      </Routes>
    </>
   )
}
export default App