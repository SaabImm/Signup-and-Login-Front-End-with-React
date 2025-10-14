import NavLink from "./NavLinks"
import IconsThing from "./iconThing"


export default function CategoriesMenue({categoryArray}){
    
    return(
        <ul className="absolute grid grid-cols-3 p-2 top-12 left-[-150px] rounded-md w-max shadow-lg bg-white backdrop-blur-xl">
            {categoryArray.map((item)=>{
                return(
                    <li key={item.index} className="flex items-center text-sm p-1 m-1 rounded-md  hover:border-blue-500 border-[0.5px] border-transparent transition">
                        <IconsThing ctg={item}  sz={20} />
                        <NavLink path={'#categories'}  text={item.charAt(0).toUpperCase() + item.slice(1)} />
                    </li>
                )
            } )
            }
            
        </ul>
    )
}