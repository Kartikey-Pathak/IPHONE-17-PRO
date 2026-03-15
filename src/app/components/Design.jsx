"use client"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Design() {
    

     useGSAP(() => {
        gsap.to(".d", {
             delay: 0.7,
                y: -30,
                opacity: 1,
                stagger: 0.3,
            scrollTrigger:{
                scroller:"body",
                trigger:".d",
                scrub:2,
            
                start:"top 90%",
                end:"top 10%"
            }

        })

    }, [])

    return (
        <section className=" opacity-0 d h-fit md:mt-32 bg-black w-full flex items-center flex-col">
            <h1 className=" text-xl text-[#FF791B] mt-20 font-semibold">Design</h1>
            <div className=" w-[99%] md:w-[60%] mt-10 flex items-center justify-center flex-col text-center">
                <h1 className=" font-bold text-2xl text-white md:text-7xl ">Unibody enclosure.</h1>
            </div>
            <div className=" w-[99%] md:w-[70%] flex items-center justify-center flex-col text-center">
                <h1 className=" font-bold text-2xl text-white md:text-7xl ">Makes a strong case for itself.</h1>


            </div>
            <div className=" w-[99%] md:w-[60%] mt-5 flex items-center justify-center flex-col text-center">
                <h3 className=" mt-5 text-[0.9rem] md:text-xl font-semibold text-[#86868B]">Introducing iPhone 17 Pro and iPhone 17 Pro Max, designed from the inside out to be the most powerful iPhone models ever made. At the core of the new design is a heat-forged aluminium unibody enclosure that maximises performance, battery capacity and durability.
                </h3>
            </div>

            <div className=" w-full md:w-[80%] mt-10  flex items-center justify-center">
                <video
                    src="/hero2.mp4"
                    autoPlay
                    
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                />

            </div>

        </section>
    )
}