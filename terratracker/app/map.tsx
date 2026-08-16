"use client"
import {useEffect, useRef} from "react";

export default function Map({children: data}: any) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const context = canvasRef.current?.getContext("2d");
        const map = new Image();
        canvasRef.current!.width = window.innerWidth;
        canvasRef.current!.height = window.innerHeight;
        map.src = "/map.svg"

        const lonMin = -180
        const lonMax = 180
        const latMin = -90
        const latMax = 90

        var [lastPointX, lastPointY] = [0, 0];
        map.onload = () => {
            context?.drawImage(map, 0, 0, window.innerWidth, window.innerHeight); 

            data.features.forEach((feature: any) => {
                const {coordinates} = feature.geometry;
                const [x, y] = coordinates;
                const canvasX = ((x - lonMin) / (lonMax - lonMin)) * window.innerWidth;
                const canvasY = ((latMax - y) / (latMax - latMin)) * window.innerHeight;
                context?.beginPath();
                context?.arc(canvasX, canvasY, feature.properties.mag, 0, Math.PI * 2);
                context!.fillStyle = `rgba(255, ${255 - Math.floor(feature.properties.mag * 25)}, 0)`;
                context?.fill();
                context?.closePath();
                /*context?.beginPath();
                context?.moveTo(canvasX, canvasY);
                context?.lineTo(lastPointX != 0 ? lastPointX : canvasX, lastPointY != 0 ? lastPointY : canvasY);
                [lastPointX, lastPointY] = [canvasX, canvasY];
                context!.strokeStyle = `rgba(255, 0, 0)`;
                context?.stroke();
                context?.closePath();
                */
            });
        }
    }, []);
    return(
        <div>
            <canvas ref={canvasRef}/>
        </div>
    )
}