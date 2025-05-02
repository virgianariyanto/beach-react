import React from "react";
import beachVideo from "../assets/beachVid.mp4";

const Hero = () => {
    return (
        <div className="w-full h-screen relative">
            <video className="w-full h-full object-cover"  src={beachVideo} autoPlay loop muted />
            <div className="absolute top-0 left-0 w-full h-full bg-black/30 flex flex-col justify-center text-center text-white">
                <div>
                    <h1 className="text-5xl md:text-7xl font-bold">Find Your Next Adventure</h1>
                    <p className="text-xl md:text-2xl py-4">With Beaches, you can find the perfect beach for your next vacation.</p>
                    <button className="bg-blue-600 text-white px-6 py-3 mt-4 rounded-md hover:bg-blue-700 transition duration-300">Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default Hero;