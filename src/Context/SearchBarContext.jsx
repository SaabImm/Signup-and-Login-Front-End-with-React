import { useState } from "react"
import { createContext } from "react"   

export const SearchBarContext=createContext()

export function InputContexte ({children}){
    const [keyWord, setKeyWord]= useState(null)
        const handleChange= (e)=>{
        setKeyWord(e.target.value)
        console.log(e.target.value)
    }


    return(
        <SearchBarContext.Provider value={{keyWord,handleChange}}>
           {children}
        </SearchBarContext.Provider>
    )
}
