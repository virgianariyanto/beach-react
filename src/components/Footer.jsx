import React from "react";

const Footer = () => {
    return (
        <div className="w-full bg-[#F0F3F4] py-16">
            <div className="max-w-[1240px] mx-auto px-4 flex flex-col">
                <div className="sm:flex text-center justify-between items-center">
                    <h1 className="font-bold text-2xl">BEACHES.</h1>
                    <div>
                        <ul className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0">
                            <li className="text-gray-600 hover:text-gray-800 cursor-pointer">About</li>
                            <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Contact</li>
                            <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Privacy Policy</li>
                            <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Terms of Service</li>
                        </ul>
                    </div>
                    <div>
                        <p className=" text-gray-600 mt-4">© 2023 Beaches. All rights reserved.</p>
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
}

export default Footer;