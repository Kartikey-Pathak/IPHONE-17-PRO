"use client"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { useGSAP } from "@gsap/react";
import { useRef } from "react";


export default function Phone() {
    const ref = useRef(null);

    useGSAP(() => {
        gsap.to(ref.current, {
            opacity: 1,
            delay: 0.8,
            scale: 1,
            duration: 2,
            scrollTrigger: {

                trigger: ref.current,
                start: "top 10%",
                end: " top 90%",
                pin: true,
                scrub: 1,
            }
        })
    }, [])


    return (
        <section className=" overflow-hidden flex flex-col w-full h-screen flex items-center justify-center">
            {/* Gameplay Part */}
            <div ref={ref} className=" scale-180 mt-20 w-full h-[20rem] md:w-[80%] md:h-[30rem] flex items-center justify-center relative">
                <img src="/frame.png" className="z-20  w-54 md:w-full h-full object-contain" alt="" />
                <h1 className=" absolute z-50 top-30 font-semibold">Pro video</h1>
                <h1 className=" absolute z-50 top-40 text-center md:text-4xl font-bold">Any more pro and <br /> it would need an agent.</h1>
                <video src="/play.mp4" autoPlay loop muted playsInline className=" rounded-3xl  h-24 w-full md:w-[95%] md:h-[36vw] lg:h-[36vw] xl:h-[28vw] lg:w-[78vw] xl:w-[62vw] object-cover rounded-[2rem] z-10 absolute"></video>
            </div>
        </section>
    )
}