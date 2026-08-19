"use client"
import {useState} from "react";

export default function InfoBar({ children: data }: any) {

    const [isOpen, setIsOpen] = useState(true);
    return (
            <div className="absolute top-0 right-0 max-h-screen w-64 overflow-y-scroll scrollbar-thin scrollbar-thumb-indigo-100">
                <div className="fixed text-lg  text-indigo-100 bg-black flex w-full">
                    <p>Recent Activity</p>
                    <button className="fixed right-5 top-1 z-100 text-indigo-100 hover:text-white text-sm" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? "Hide" : "Show"}
                    </button>
                </div>
                { isOpen && (<div className="bg-white/20 pt-7 rounded-lg shadow-md  ">
                    {data.features.map((feature: any, index: number) => {
                        const date = new Date(feature.properties.time);
                        return (
                            <div key={index} className="font-inter text-indigo-100 bg-black/20 p-2 rounded-sm mb-1">
                                <p className="text-sm">{feature.properties.place} - Mag: {feature.properties.mag} - Date: {date.toLocaleString()}</p>
                            </div>
                        );
                    })}           
                </div>)}
            </div>
    )
}