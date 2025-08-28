import './App.css'
import HomePage from './Pages/HomePage'
import Navbar from './Components/Navbar'
import ProducListing from './Pages/ProductListing'
import CategoriesCarousel from './Components/Category'
import ItemCard from './Components/ItemCards'
import { SearchBarContext } from './Context/SearchBarContext'
import { useContext } from 'react'
import data from './MockDataAPI/products.json'

export default function App() {
  const {keyWord}=useContext(SearchBarContext)

  return (
    <>
    
    <section > <Navbar />  </section>
    <section id='home'> <HomePage />  </section>
    <CategoriesCarousel/>
    {/*<ItemCard data={data[0]} />*/}

    </>
  )
}

