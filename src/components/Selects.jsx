import React from "react";
import borabora from "../assets/borabora.jpg";
import borabora2 from "../assets/borabora2.jpg";
import keywest from "../assets/keywest.jpg";
import maldives from "../assets/maldives.jpg";
import maldives2 from "../assets/maldives2.jpg";
import SelectsCard from "./SelectsCard";

const Selects = () => {
    return(
        <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <SelectsCard img={borabora} text="Borabora"/>
            <SelectsCard img={borabora2} text="Borabora 2"/>
            <SelectsCard img={keywest} text="Keywest"/>
            <SelectsCard img={maldives} text="Maldives"/>
            <SelectsCard img={maldives2} text="Maldives 2"/>
        </div>
    )
}

export default Selects;