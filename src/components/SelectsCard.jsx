import React from "react";

const SelectsCard = (props) => {
    return(
        <div className="relative">
            <img className="w-full h-full object-cover" src={props.img} alt="" />
            <div className="absolute top-0 left-0 w-full h-full bg-gray-900/30">
                <p className="left-4 bottom-4 text-xl text-white font-bold absolute">{props.text}</p>
            </div>
        </div>
    )
}

export default SelectsCard;