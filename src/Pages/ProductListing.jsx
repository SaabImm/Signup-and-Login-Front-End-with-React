import { useState } from "react"
import ItemCard from "../Components/ItemCards"
import data from '../MockDataAPI/products.json'
import SectionTitle from "../Components/Title"

export default function ProductListing(){
     const [showAll, setShowAll] = useState(false);
     const visibleProducts = showAll ? data : data.slice(0, 6);
    return(
        <>
        <SectionTitle title='Our Products'/>
        <div className="Container relative"> 
            <div className="CardItemCntainer grid grid-cols-3 gap-10 mx-10">
                { visibleProducts.map((product, index) => {
                    //displaying all the card
                    return(
                        <ItemCard key={index} data={product}/>
                )
                })}
            </div>
            

            
        {/* Blur Overlay when not showing all */}
        {!showAll && data.length > 6 && (
          <div className=" flex justify-center items-end pb-6 my-10">
            <button
                onClick={() => setShowAll(true)}
                className="px-8 py-2 border-2 border-[#0096C7] text-[#0096C7] bg-white rounded-xl shadow-lg backdrop-blur-sm hover:text-white hover:bg-[#0096C7] transition">
                Show All
            </button>
          </div>
    
      )}


            {/* Show Less button */}
      {showAll && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(false)}
            className="px-5 py-2 bg-[#334A4F] text-white rounded-xl hover:bg-[#0096C7] transition"
          >
            Show Less
          </button>
        </div>
      )}
      
      
        </div>        
        </>
        
    )
}