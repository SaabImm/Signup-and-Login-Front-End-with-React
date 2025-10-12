import { IoIosLaptop } from "react-icons/io";
import { BsHeadphones, BsSmartwatch, BsTablet  } from "react-icons/bs";
import { CiMonitor, CiDesktopMouse2  } from "react-icons/ci";
import { FiSmartphone } from "react-icons/fi";
import { RxKeyboard } from "react-icons/rx";


export default function IconsThing({ctg, sz, clr}){
     switch (ctg) {
                case 'monitors':
                    return  <CiMonitor  size={sz} color={clr}/>  
                case 'headphones':
                    return  <BsHeadphones  size={sz} color={clr} />  ;
                case 'keyboards':
                    return   <RxKeyboard  size={sz} color={clr} /> ;
                case 'laptops':
                    return  <IoIosLaptop   size={sz} color={clr} /> ;
                case 'smartphones':
                    return  <FiSmartphone  size={sz} color={clr}/> ;
                case 'smartwatches':
                    return  <BsSmartwatch   size={sz} color={clr}/> ;       
                case 'mice':
                    return  <CiDesktopMouse2   size={sz} color={clr}/> ;
                case 'tablets':
                    return  <BsTablet   size={sz} color={clr}/> ;
                default:
                return null;
            }
}