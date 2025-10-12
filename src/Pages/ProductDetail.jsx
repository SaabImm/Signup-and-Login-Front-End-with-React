import airpodsMaxSilver from '..//assets/ravi-palwe-ax23KYiUdJc-unsplash.jpg'
import airpodsMaxSilverCloseUp from '..//assets/matt-birchler-F5ZtkCWbtyE-unsplash.jpg'
import airpodsMaxBlack from '..//assets/sam-grozyan-uNC9-RgzjTA-unsplash.jpg'
import airpodsMaxBlue from '..//assets/project-290-Q-raIe-gAOo-unsplash.jpg'
import { useState } from 'react'
import Rating from '../Components/Rating'

export default function ProductDetail({ item }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="flex flex-col md:flex-row gap-12 mx-10 my-[50px] lg:mx-20 py-10">
      {/* Left Side - Product Images */}
      <div className="flex flex-col w-full md:w-1/2 gap-6">
        {/* Main Image */}
        <div className="border rounded-2xl overflow-hidden shadow-md">
          <img
            src={airpodsMaxSilver}
            alt="airpods Max Silver"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-4">
          <div className="border rounded-xl overflow-hidden w-28 h-28 cursor-pointer hover:scale-105 transition">
            <img
              src={airpodsMaxSilverCloseUp}
              alt={item.description}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="border rounded-xl overflow-hidden w-28 h-28 cursor-pointer hover:scale-105 transition">
            <img
              src={airpodsMaxBlack}
              alt="airpods Max Black"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="border rounded-xl overflow-hidden w-28 h-28 cursor-pointer hover:scale-105 transition">
            <img
              src={airpodsMaxBlue}
              alt="airpods Max Blue"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right Side - Product Details */}
      <div className="flex flex-col w-full md:w-1/2 gap-6">
        {/* Title + Description */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{item.name}</h1>
          <p className="text-gray-600 mb-3">{item.longDescription}</p>
          <div className="flex items-center gap-2">
            <Rating rating={item.rating} />
            <span className="text-sm text-gray-500">(121 reviews)</span>
          </div>
        </div>

        {/* Price */}
        <div>
          <p className="text-2xl font-semibold text-gray-800">
            $ {item.price}.00
          </p>
          <p className="text-sm text-gray-500">or 99.99/month with financing</p>
        </div>

        {/* Color Options */}
        <div>
          <p className="text-sm font-semibold mb-2">Choose a Color</p>
          <div className="flex gap-3">

            {item.colors.map((color)=>{

               return <span className={`w-8 h-8 bg-${color} rounded-full cursor-pointer border-2 border-gray-300`}></span>
            } ) }
            
          </div>
        </div>

        {/* Quantity */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            className="px-3 py-1 border rounded-md hover:bg-gray-100"
          >
            -
          </button>
          <span className="px-4">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-1 border rounded-md hover:bg-gray-100"
          >
            +
          </button>
          <p className="text-sm text-red-500 ml-3">Only 12 items left!</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <button className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
            Buy Now
          </button>
          <button className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition">
            Add to Cart
          </button>
        </div>

        {/* Delivery & Returns */}
        <div className="mt-6 text-sm text-gray-600 space-y-2">
          <p>🚚 Free Delivery - Enter your postal code for availability</p>
          <p>↩️ Free 30-day returns</p>
        </div>
      </div>
    </section>
  );
}
