import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
    return(
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
            <div className="lg:col-span-2 flex flex-col justify-evenly">
                <div>
                    <h2 className="font-bold text-2xl">LUXURY INCLUDED VACATION FOR TWO PEOPLE</h2>
                    <p className="py-4 text-gray-600">
                        Sandals Resorts are the ultimate in luxury all-inclusive vacations for couples. With 15 stunning beachfront resorts located on the most beautiful islands in the Caribbean, Sandals offers a unique experience that combines luxury, romance, and adventure.
                    </p>
                </div>
                <div className="grid sm:grid-cols-3 gap-8 py-4">
                    <div className="flex flex-col lg:flex-row justify-between items-center text-center p-4">
                        <div className="flex items-center space-x-4">
                            <RiCustomerService2Fill size={40} className="text-blue-600" />
                            <div>
                                <h3 className="font-bold">CUSTOMER SERVICE</h3>
                                <p className="text-gray-600">24/7 support</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between items-center text-center p-4">
                        <div className="flex items-center space-x-4">
                            <MdOutlineTravelExplore size={40} className="text-blue-600" />
                            <div>
                                <h3 className="font-bold">TRAVEL EXPERTS</h3>
                                <p className="text-gray-600">Expert advice</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between items-center text-center p-4">
                        <div className="flex items-center space-x-4">
                            <RiCustomerService2Fill size={40} className="text-blue-600" />
                            <div>
                                <h3 className="font-bold">CUSTOMER SERVICE</h3>
                                <p className="text-gray-600">24/7 support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="border text-center border-slate-300 w-5/6 mx-auto lg:w-full">
                    <p>GET AN ADDITIONAL 10% OFF</p>
                    <p className="py-2">10 HOURS LEFT</p>
                    <p className="bg-slate-600 py-2 text-white">BOOK NOW AND SAVE</p>
                </div>
                <form className="w-5/6 mx-auto lg:w-full">
                    <div className="flex flex-col my-2">
                        <label htmlFor="">Destination</label>
                        <select className="border rounded-md border-slate-300 p-2" name="" id="">
                            <option value="">Choose a destination</option>
                            <option value="">Destination 1</option>
                            <option value="">Destination 2</option>
                            <option value="">Destination 3</option>
                            <option value="">Destination 4</option>
                        </select>
                    </div>
                    <div className="flex flex-col my-2">
                        <label htmlFor="">Check-in</label>
                        <input className="border rounded-md border-slate-300 p-2" type="date" name="" id="" />
                    </div>
                    <div className="flex flex-col my-2">
                        <label htmlFor="">Check-out</label>
                        <input className="border rounded-md border-slate-300 p-2" type="date" name="" id="" />
                    </div>
                    <div className="flex flex-col my-2">
                        <button className="py-2 bg-blue-500 hover:bg-blue-600 transition-all cursor-pointer text-white rounded-md">Rates & Availabilities</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Search;