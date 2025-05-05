import React from "react";
import { useState, useEffect } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const sliderData = [
    {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Image 1",
    },
    {
        url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Image 2",
    },
    {
        url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Image 3",
    },
    {
        url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Image 4",
    },  
]

const Carousel = () => {
    useEffect(() => {
        const interval = setInterval(() => {
          nextSlide();
        }, 5000); // setiap 5 detik
      
        return () => clearInterval(interval);
    }, []);
      
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
    }

    const prevSlide = () => {
        setSlide((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
    }

    return (
        <div className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center overflow-hidden">
          <BsArrowLeftSquareFill
            onClick={prevSlide}
            className="absolute opacity-80 top-[50%] text-3xl text-white cursor-pointer left-8 z-10"
          />
          <BsArrowRightSquareFill
            onClick={nextSlide}
            className="absolute opacity-80 top-[50%] text-3xl text-white cursor-pointer right-8 z-10"
          />
          <div className="relative w-full h-[500px]">
            {sliderData.map((item, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                  index === slide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      );
      
}

export default Carousel;