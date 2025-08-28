import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper/modules";
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft} from "react-icons/md";
import ProducListing from "../Pages/ProductListing"
import data from '../MockDataAPI/products.json'
import "swiper/css/navigation";
import "swiper/css";
import IconsThing from "./iconThing";

export default function CategoriesCarousel(){
    const [category, setCategory]= useState('')
    const categoryArray=[]
    data.map((item) =>{
        if(!categoryArray.includes(item.category))
        categoryArray.push(item.category)
    })
    
    return(
        <>
        <section className="ImageGallery relative flex  py-2  h-full justify-start backdrop-blur-lg ">
            <Swiper 
                modules={[Navigation]} 
                spaceBetween={10} 
                slidesPerView={6} 
                loop={false} 
                navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
                }}  
            >   
                {categoryArray.map((elm) => {
                    return(                         
                        <SwiperSlide key={elm.index} className="odd:mt-10 even:mb-10"> 
                            <div className='flex flex-col items-center py-10 ' >
                                <button onClick={() => {setCategory(elm)}} > 

                                    <div className="CategoryCard p-5 bg-[#68e2f823] rounded-t-2xl  rounded-b-[99px] ">

                                        <IconsThing ctg={elm} key={elm.index}  />
                                      
                                    </div>  

                                </button>
                                <p>
                                    { elm.charAt(0).toUpperCase() + elm.slice(1) } 
                                </p>
                            </div>
                        </SwiperSlide>        
                    )
                })} 
            </Swiper>

                <button className="custom-prev z-10 absolute left-2 top-10 -translate-y-1/2  text-white p-3 rounded-full hover:bg-black/50 transition">
                    <MdKeyboardDoubleArrowLeft size={20}/>
                </button>
                <button className="custom-next z-10 absolute right-2  top-10 -translate-y-1/2  text-white p-3 rounded-full hover:bg-black/50 transition">
                    <MdKeyboardDoubleArrowRight size={20}/>
                </button>
            
        </section>
        <ProducListing category={category}/>
        </>
    )
}