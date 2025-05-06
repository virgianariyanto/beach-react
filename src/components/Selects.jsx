import React from "react";
import beach1 from "../assets/beach1.jpg";
import beach2 from "../assets/beach2.jpg";
import beach3 from "../assets/beach3.jpg";
import beach4 from "../assets/beach4.jpg";
import beach5 from "../assets/beach5.jpg";
import SelectsCard from "./SelectsCard";

const Selects = () => {
    return(
        <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <SelectsCard img={beach1} text="Beach 1"/>
            <SelectsCard img={beach2} text="Beach 2"/>
            <SelectsCard img={beach3} text="Beach 3"/>
            <SelectsCard img={beach4} text="Beach 4"/>
            <SelectsCard img={beach5} text="Beach 5"/>
        </div>
    )
}

export default Selects;