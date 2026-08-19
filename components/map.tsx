"use client"
import {useState} from "react";
import Image from "next/image";

export default function Map({children: data}: any) {

    const [minLong, maxLong] = [-180, 180];
    const [minLat, maxLat] = [-90, 90];
    var d = ``

    const [isOver, setIsOver] = useState<number | null>(null);

    return (
        <div className="absolute top-0 left-0 w-full h-full">
            <Image src="/map.svg" alt="World Map" fill />
            <svg viewBox="0 0 1200 600" className="absolute top-0 left-0 w-full h-full">
               {data.features.map((feature: any, index: number) => {
                    const [x, y] = feature.geometry.coordinates;
                    const long = Math.floor((x - minLong) / (maxLong - minLong) * 1200);
                    const lat = Math.floor((maxLat - y) / (maxLat - minLat) * 600);

                    const mod = (index / data.features.length);
                    const rTime = Math.floor(255 * mod);
                    const gTime = Math.floor(255 * (1 - mod));

                    const gMag = Math.floor(255 * (feature.properties.mag / 10))
                    
                    return (
                        <g key={index}>
                            <line x1={long} y1={lat} x2={long} y2={lat - (lat * (data.features.length - index) / data.features.length)} stroke={`rgb(${rTime}, ${gTime}, 0, 0.5)`} strokeWidth="1" />
                            <circle cx={long} cy={lat} r={feature.properties.mag} fill={`rgb(255, ${255 - gMag}, 0)`} className="hover:fill-amber-50" onMouseEnter={() => setIsOver(index)} onMouseLeave={() => setIsOver(null)}/>
                        </g>
                        
                )})};
                {data.features.map((feature: any, index: number) => {
                    const [x, y] = feature.geometry.coordinates;
                    const long = (x - minLong) / (maxLong - minLong) * 1200;
                    const lat = (maxLat - y) / (maxLat - minLat) * 600;
                    return (
                        <foreignObject key={index} x={long} y={lat} width={200} height={100} className="pointer-events-none" >
                                {isOver === index && <div className="bg-zinc-800 text-sm rounded-sm p-2">{feature.properties.title}</div>}
                        </foreignObject>
                    )
                })};
            </svg>
        </div>   
    )
}