import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage'
import MainLayout from './Layouts/MainLayout';
import ProductDetail from './Pages/ProductDetail'
import SignUup from './Pages/Sign-up'

export default function App() {
  return (
    <Router>
      
      <Routes>
        <Route  element={<MainLayout/>}>
        {/* Home route */}
        <Route path="/" element={<HomePage /> }/>

        {/* Product detail route */}
        <Route path="/product/:id" element={<ProductDetail/>} />
        <Route path="/sign-up" element={<SignUup/>} />
        </Route>

        
      </Routes>
    </Router>
  )
}
