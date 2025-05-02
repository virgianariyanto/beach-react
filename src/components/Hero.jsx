import React from "react";
import beachVideo from "../assets/beachVid.mp4";

const Hero = () => {
    return (
        <div className="w-full h-screen relative">
            <video className="w-full h-full object-cover"  src={beachVideo} autoPlay loop muted />
        </div>
    )
}

export default Hero;