"use client"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoCarousel from "./VideoCarousel";
import ProCarousel from "./ProCarousel";
import PhoneCarousel from "./PhoneCarousel";

gsap.registerPlugin(ScrollTrigger);
function Battery() {
    useGSAP(() => {
        gsap.to(".links", {
            delay: 0.7,
            y: -30,
            opacity: 1,
            stagger: 0.3,
            scrollTrigger: {
                scroller: "body",
                trigger: ".links",
                scrub: 2,
                start: "top 90%",
                end: "top 50%"
            }

        })

    }, [])
    return (
        <div className=" w-full flex flex-col max-w-screen h-[52rem] md:mb-20 lg:h-[90rem] md:h-[70rem] bg-black">
            {/* text */}
            <div className=" bg-black m-5  md:ml-30 md:w-[35%] md:mt-10 flex flex-col gap-1 items-start justify-start">
                <h1 className=" opacity-0 links text-3xl md:text-4xl lg:text-5xl text-white font-semibold">Battery life. <br />
                    All-time high.</h1>
                <h1 className=" font-bold text-start text-xl text-[#86868B] md:text-xl ">The new internal design creates significant additional room for battery capacity, giving iPhone 17 Pro Max the <span className=" text-white">best-ever iPhone battery life</span>— and up to 3 more hours per full charge compared to iPhone 15 Pro Max. From extended video playback to after-hours work, it's always ready for overtime.</h1>

            </div>

            {/* The Video part */}
            {/* <PhoneCarousel /> */}
            <div className=" w-full h-full relative  overflow-hidden ">
                <img src="hand.jpg" alt="" className=" scale-170" />
                <div className=" flex items-center md:gap-20 gap-3 pl-5 md:pl-0 md:flex-row absolute bottom-0 left-0 right-0  justify-center">
                    <h1 className=" font-bold text-sm text-[#86868B] md:text-xl ">Up to <br /><span className=" text-orange-400">31 hours</span><br /> video playback on <br /> iPhone 17 Pro</h1>
                    <h1 className=" font-bold text-sm text-[#86868B] md:text-xl ">Up to <br /><span className=" text-orange-400">37 hours</span><br /> video playback on <br /> Phone 17 Pro Max</h1>
                    <h1 className=" font-bold  text-sm text-[#86868B] md:text-xl ">Up to <br /><span className=" text-orange-400">50% charge
                        <br /> in 20 minutes</span><br /> video playback on <br /> Phone 17 Pro Max</h1>


                </div>
            </div>
        </div>
    )
}
export default Battery;