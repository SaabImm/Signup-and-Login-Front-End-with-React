import './App.css'
import FormulaireCNOA from './Pages/Sign-up'
import ProfilePage from './Pages/ProfilePage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
    <Router>
      <Routes>  
          <Route path="/" element={<FormulaireCNOA/>} />
          <Route path="/profile" element={<ProfilePage/>} />
      </Routes>
    </Router>
      
    </>
  )
}
