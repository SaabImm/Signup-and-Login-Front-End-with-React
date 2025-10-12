import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage'
import MainLayout from './Layouts/MainLayout';
import data from './MockDataAPI/products.json'
import ProductDetail from './Pages/ProductDetail'

export default function App() {
  return (
    <Router>
      
      <Routes>
        <Route  element={<MainLayout/>}>
        {/* Home route */}
        <Route path="/" element={<HomePage /> }/>

        {/* Product detail route */}
        <Route path="/product/:id" element={<ProductDetail item={data[0]} />} />
        </Route>
      </Routes>
    </Router>
  )
}
