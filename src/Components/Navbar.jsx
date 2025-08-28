import SauSauLogo from '../assets/SauSauLogo2.png' 
import NavLink from './NavLinks'
import { useState, useContext} from "react"
import {SearchBarContext} from '../Context/SearchBarContext'
import { PiShoppingCartFill } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";

export default function Navbar(){
    const [openBar, setOpenBar]=  useState(false)
    const {keyWord, handleChange}=useContext(SearchBarContext)
    const toggleSearchBar= ()=>{
        setOpenBar(prev => !prev)
    }


    return(
        <nav className='relative'>
            <div className='fixed backdrop-blur-[10px] top-0 right-0 left-0 z-50 flex justify-between items-center px-12 py-4'>
                <div className='w-10'>
                <img src={SauSauLogo} alt="Sau Sau Logo" className='rounded-xl'/>
                </div>

                <div className='basis-1/2' >
                    <ul className='flex justify-between items-center '>
                        <NavLink text="Home" path="#home" />
                        <NavLink text="Shop" path="#shop" />  
                        <NavLink text="CheckOut" path="#chackout" />
                        <NavLink text="Contact" path="#contact" />
                        <NavLink text="About" path="#about" />
                    </ul>
                </div>

                <ul className='flex justify-between items-center basis-1/12'>
                    <li><PiShoppingCartFill /> </li>
                    {openBar &&
                    <input type="text" className='rounded-md'  onChange={handleChange}/>}
                    <button onClick={toggleSearchBar}>
                    <li ><IoSearchOutline /> </li>
                    </button>
                </ul>
            </div>
            
        </nav>
        
    )
}