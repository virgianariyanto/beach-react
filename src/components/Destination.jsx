import React from "react";
import beach1 from "../assets/beach1.jpg";
import beach2 from "../assets/beach2.jpg";
import beach3 from "../assets/beach3.jpg";
import beach4 from "../assets/beach4.jpg";
import beach5 from "../assets/beach5.jpg";

const Destination = () => {
    return(
       <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
              <h1 className="text-4xl font-bold">Popular Destinations</h1>
              <p className="py-4 text-xl text-gray-600">Explore the most beautiful beaches around the world.</p>
              <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
                <img className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2" src={beach1} alt="" />
                <img className="w-full h-full object-cover col" src={beach2} alt="" />
                <img className="w-full h-full object-cover col" src={beach3} alt="" />
                <img className="w-full h-full object-cover col" src={beach4} alt="" />
                <img className="w-full h-full object-cover col" src={beach5} alt="" />
              </div>
       </div>
    )
}

export default Destination;