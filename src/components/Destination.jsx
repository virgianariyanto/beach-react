import React from "react";
import borabora from "../assets/borabora.jpg";
import borabora2 from "../assets/borabora2.jpg";
import keywest from "../assets/keywest.jpg";
import maldives from "../assets/maldives.jpg";
import maldives2 from "../assets/maldives2.jpg";

const Destination = () => {
    return(
       <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
              <h1 className="text-4xl font-bold">Popular Destinations</h1>
              <p className="py-4 text-xl text-gray-600">Explore the most beautiful beaches around the world.</p>
              <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
                <img className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2" src={borabora} alt="" />
                <img className="w-full h-full object-cover col" src={borabora2} alt="" />
                <img className="w-full h-full object-cover col" src={keywest} alt="" />
                <img className="w-full h-full object-cover col" src={maldives} alt="" />
                <img className="w-full h-full object-cover col" src={maldives2} alt="" />
              </div>
       </div>
    )
}

export default Destination;