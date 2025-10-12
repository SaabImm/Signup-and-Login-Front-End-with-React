import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper/modules";
import ProducListing from "../Pages/ProductListing"
import "swiper/css/navigation";
import "swiper/css";
import IconsThing from "./iconThing";
import SectionTitle from "./Title";
import data from '../MockDataAPI/products.json'

export default function CategoriesCarousel(){
    const [category, setCategory]= useState('')
        const categoryArray=[]
        data.map((item) =>{
            if(!categoryArray.includes(item.category))
            categoryArray.push(item.category)
        })
    
    return(
        <>
        <SectionTitle title='Shop by Category'/>
        <div className="CategCaroussel relative flex  py-2  h-full justify-start backdrop-blur-lg ">
            
            <Swiper 
                modules={[Navigation]} 
                spaceBetween={5} 
                slidesPerView={8} 
                loop={false} 
 
            >   
                {categoryArray.map((elm) => {
                    return(                         
                        <SwiperSlide key={elm.index} className="odd:mt-10 even:mb-10"> 
                            <div className='flex flex-col items-center py-10 ' >
                                <button onClick={() => {setCategory(elm)}} > 

                                    <div className="CategoryCard p-5 bg-[#68e2f823] rounded-t-2xl  rounded-b-[99px] ">

                                        <IconsThing ctg={elm} sz={45} clr="#334A4F"  />
                                      
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


            
        </div>
        <ProducListing category={category}/>
        </>
    )
}