"use client"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Cameras(){
    
     useGSAP(() => {
        gsap.to(".c", {
             delay: 0.7,
                y: -30,
                opacity: 1,
                stagger: 0.3,
            scrollTrigger:{
                scroller:"body",
                trigger:".c",
                scrub:2,
               
                start:"top 90%",
                end:"top 10%"
            }

        })

    }, [])
    return(
        <section className=" c opacity-0 h-screen w-full flex items-center flex-col">
             <h1 className=" text-xl md:text-2xl text-[#FF791B] mt-30 font-semibold">Cameras</h1>
              <h1 className=" font-bold text-2xl mt-5 text-white md:text-7xl ">A big zoom forward.</h1>
              <div className=" w-full gap-1 mt-15 flex flex-col md:flex-row">
                <div className=" overflow-hidden w-full md:w-[75%] flex items-center justify-center">
                     <video
                    src="/camera.mp4"
                    autoPlay
                    
                    muted
                    playsInline
                    className="w-full md:mr-64 h-full object-cover"
                />  
                </div>
                <div className=" flex flex-col items-center md:items-start justify-center">
                    <h1 className=" text-2xl font-semibold text-[#86868B]">Up to</h1>
                    <h1 className=" text-5xl font-bold text-[#FF791B]">8x</h1>
                    <h1 className=" text-2xl font-semibold text-[#86868B]">optical-quality zoom</h1>

                     <h1 className=" mt-10 text-2xl font-semibold text-[#86868B]">All</h1>
                     <h1 className=" text-5xl font-bold text-[#FF791B]">48MP</h1>
                     <h1 className=" text-2xl font-semibold text-[#86868B]">rear cameras</h1>

                </div>
              </div>

              <div className=" w-[95%] md:w-[50%] mt-20 flex items-center justify-center flex-col text-center">
                <h3 className=" mt-5 text-[0.9rem] md:text-xl font-semibold text-[#86868B]">Across the iPhone 17 Pro camera system, you’ll find innovation that goes to great lengths. The telephoto features the next generation of our tetraprism design and a 56% larger sensor. With an equivalent 200 mm focal length, the 8x optical-quality zoom makes this <b className=" text-white">the longest iPhone Telephoto ever</b> — offering 16x total optical zoom range. So you can explore an even wider range of creative choices and add a longer reach to your compositions.
                </h3>
            </div>

        </section>
    )
}