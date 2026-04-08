"use client"
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { useGSAP } from "@gsap/react";

export default function Lens() {
       const secref=useRef(null);
    
    useGSAP(() => {
        gsap.to(secref.current, {
             delay: 0.9,
                y: -30,
                opacity: 1,
                stagger: 0.3,
            scrollTrigger:{
                scroller:"body",
                trigger:secref.current,
                scrub:2,
                start:"top 90%",
                end:"top 5%"
            }

        })
    }, [])  
    return (
        <section ref={secref} className=" opacity-0 md:mt-72 mt-96 h-full w-full flex-col flex items-center justify-center">
            <div className=" w-[99%] md:w-[45%] text-center mt-10 flex items-center justify-center flex-col">
                <h1 className=" font-bold text-center text-xl text-[#86868B] md:text-2xl ">Like having <span className=" text-white">8 pro lenses in your pocket.</span> Super-high-resolution <span className=" text-white">24MP photos by default.</span></h1>
            </div>

            <div className=" overflow-hidden flex items-center justify-center w-full h-[20rem] md:h-screen">
                <video
                    src="/lens.mp4"
                    autoPlay

                    muted
                    playsInline
                    className="w-full  h-full object-cover"
                />
            </div>

            <div className=" mt-36 w-full md:flex-row flex-col gap-10 md:w-[85%]  flex items-center md:items-start  justify-center md:justify-start">
                <div className="  h-80 w-96 flex items-center md:items-start justify-center md:justify-start flex-col">
                    <h1 className=" text-xl font-semibold md:text-xl">48MP Fusion Main camera</h1>
                    <div className=" mt-5 w-full border-b-2 border-[#495057]"></div>
                    <h3 className=" mt-5 text-[0.9rem] text-[#86868B] font-semibold md:text-xl">24/48 mm focal length (1x/2x)</h3>
                    <h3 className=" mt-5 text-[0.9rem] text-[#86868B] font-semibold md:text-xl">ƒ/1.78 aperture</h3>
                    <h3 className=" mt-5 text-[0.9rem] text-[#86868B] font-semibold md:text-xl">2.44 μm quad-pixel (1.22 μm individual)</h3>
                </div>
                <div className="  h-80 w-96 flex items-center md:items-start justify-center md:justify-start flex-col">
                    <h1 className=" text-xl font-semibold md:text-xl">48MP Fusion Ultra Wide camera</h1>
                    <div className=" mt-5 w-full border-b-2 border-[#495057]"></div>
                    <h3 className=" mt-5 text-[0.9rem] text-[#86868B] font-semibold md:text-xl">13 mm focal length (.5x/macro)</h3>
                    <h3 className=" mt-5 text-[0.9rem] text-[#86868B] font-semibold md:text-xl">ƒ/2.2 aperture</h3>
                    <h3 className=" mt-5 text-[0.9rem] text-[#86868B] font-semibold md:text-xl">1.4 μm quad-pixel (0.7 μm individual)</h3>
                </div>
                <div className="  h-80 w-96 flex items-center md:items-start justify-center md:justify-start flex-col">
                    <h1 className=" text-xl font-semibold md:text-xl">48MP Fusion Telephoto camera</h1>
                    <div className=" mt-5 w-full border-b-2 border-[#495057]"></div>
                    <h3 className=" mt-5 text-[0.9rem] text-[#86868B] font-semibold md:text-xl">100/200 mm focal length (4x/8x)</h3>
                    <h3 className=" mt-5 text-[0.9rem] text-[#86868B] font-semibold md:text-xl">ƒ/2.8 aperture</h3>
                    <h3 className=" mt-5 text-[0.9rem] text-[#86868B] font-semibold md:text-xl">1.4 μm quad-pixel (0.7 μm individual)</h3>
                </div>

            </div>

        </section>
    )
}