import './App.css'
import FormulaireCNOA from './Pages/Sign-up'
import LoginForm from './Pages/Login'
import ProfilePage from './Pages/ProfilePage'
import VerifyPage from './Pages/VerificationPage'
import VerifyPendingPage from './Pages/VerifyPending'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
    <Router>
      <Routes>  
          <Route path="/signup" element={<FormulaireCNOA/>} />
          <Route path="/" element={<LoginForm/>} />
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path="/verify-pending" element={<VerifyPendingPage />} />
          <Route path="/verify/:token" element={<VerifyPage/>} />
          
      </Routes>
    </Router>
      
    </>
  )
}
