import { useState, useContext} from "react"
import iphonePicture from '../assets/iphone.jpg'
import { IoIosStar, IoIosStarOutline, IoIosStarHalf  } from "react-icons/io";
import Rating from "./Rating";

export default function ItemCard({data}){
    return(
          <>
            <div className="ItemCard flex flex-col gap-4 m-auto w-72 rounded-2xl p-4 shadow-md hover:shadow-lg">
              <div className="ImageContainer overflow-hidden rounded-lg">
                <img
                  src={iphonePicture}
                  alt={data.description}
                  className="w-full h-full object-cover hover:scale-[1.1] transition-all duration-200"
                />
              </div>
                  <div className="DetailsContainer flex flex-col gap-4">
                      <div className="Title flex justify-between text-lg font-semibold truncate">
                      <p >
                        {data.name}
                      </p>

                      <p>
                          $ {data.price}
                      </p>
                      </div>

                      <p className="Details text-xs text-gray-400 w-[50%]">
                         {data.description}
                      </p>
                      <div className="Rating flex gap-2">
                      <Rating rating={data.rating}/>
                      </div>
                      <div className="buttonContainer flex justify-between items-center gap-4">
                          <button className="AddToCart flex-1 border-2 font-medium p-2 text-sm rounded-2xl bg-[#334A4F] text-white hover:border-[#334A4F] hover:text-[#334A4F] hover:bg-white transition duration-200">
                              Add to Cart
                          </button>
                          <button className="ViewDetails flex-1 font-medium border-2 border-[#334A4F] p-2 text-sm rounded-2xl hover:bg-[#334A4F] hover:text-white transition duration-200">
                              View Details
                          </button>
                      </div>
                  </div>

            </div>   


        </>
    )
}