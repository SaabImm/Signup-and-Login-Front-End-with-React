import { IoIosLaptop } from "react-icons/io";
import { BsHeadphones, BsSmartwatch, BsTablet  } from "react-icons/bs";
import { CiMonitor, CiDesktopMouse2  } from "react-icons/ci";
import { FiSmartphone } from "react-icons/fi";
import { RxKeyboard } from "react-icons/rx";


export default function IconsThing({ctg}){
     switch (ctg) {
                case 'monitors':
                    return  <CiMonitor  size={50} color="#576969"/>  
                case 'headphones':
                    return  <BsHeadphones  size={50} color="#576969" />  ;
                case 'keyboards':
                    return   <RxKeyboard  size={50} color="#576969" /> ;
                case 'laptops':
                    return  <IoIosLaptop   size={50} color="#576969" /> ;
                case 'smartphones':
                    return  <FiSmartphone  size={50} color="#576969"/> ;
                case 'smartwatches':
                    return  <BsSmartwatch   size={50} color="#576969"/> ;
                case 'mice':
                    return  <CiDesktopMouse2   size={50} color="#576969"/> ;
                case 'tablets':
                    return  <BsTablet   size={50} color="#576969"/> ;
                default:
                return null;
            }
}