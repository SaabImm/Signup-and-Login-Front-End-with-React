 
import NavLink from './NavLinks'
import CategoriesMenue from './CategoriesMenue';
import { Link } from "react-router-dom";
import { useState, useContext} from "react"
import {SearchBarContext} from '../../Context/SearchBarContext'
import { PiShoppingCartFill } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { PiUser } from "react-icons/pi";
import data from '../../MockDataAPI/products.json'

export default function Navbar(){
    const [isOpenBar, setIsOpenBar]=  useState(false)
    const [isOpenMenue, setIsOpenMenue]=useState(false)
    const {keyWord, handleChange}=useContext(SearchBarContext)
    const toggleSearchBar= ()=>{
        setIsOpenBar(prev => !prev)
    }

        const categoryArray=[]
        data.map((item) =>{
            if(!categoryArray.includes(item.category))
            categoryArray.push(item.category)
        })
    return(
        <nav className='NavBar '>
            <div className='top-0 right-0 left-0 flex justify-between items-center rounded-b-lg px-12 py-2 text-[#383838] text-shadow-lg/30'>
                <Link to='/'>
                EeasySop
                </Link>

                <div className='NavLinks ' >
                    <ul className='flex justify-between items-center gap-5'>
                        <NavLink text="Home" path='/'/> 
                        <NavLink text="Shop" path="#categories" />  
                        <div className='DropDowMenue relative '>
                            <button onClick={()=> {setIsOpenMenue(prev => !prev)}}>
                                <NavLink text="Categories" /> 
                            </button>
                            
                            {isOpenMenue &&
                                <CategoriesMenue categoryArray={categoryArray} />
                            }
                        </div>
                        <NavLink text="Contact" path="#contact" />
                        <NavLink text="About" path="#about" />
                    </ul>
                </div>

                <ul className='flex justify-between gap-6 items-center'>
                    <li><PiShoppingCartFill size={20} /> </li>
                    {isOpenBar &&
                    <input type="text" className="rounded-md border px-2 py-1 ml-2 outline-none font-[Montserrat,sans-serif]"   onChange={handleChange}/>}
                    <button onClick={toggleSearchBar}>
                    <li ><IoSearchOutline  size={20}/> </li>
                    </button>

                    <li ><PiUser   size={20}/> </li>
                </ul>
            </div>
            
        </nav>
        
    )
}