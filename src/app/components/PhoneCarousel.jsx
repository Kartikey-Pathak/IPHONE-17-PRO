"use client"

import { Slides } from "../constants/PhoneStatic";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function PhoneCarousel() {
    const vidref = useRef(null);

    useGSAP(() => {
        gsap.to(vidref.current, {
            delay: 2.2,
            y: -100,
            opacity: 1,
            scrollTrigger: {
                trigger: vidref.current,
                scrub: 2,
                start: "top 90%",
                end: "top 50%",
            },
        });
    }, []);

    return (
        <div className="w-full flex items-center justify-center mt-20 md:mt-1 bg-black">
            <div
                ref={vidref}
                className="opacity-0 flex items-start h-[85vh] md:h-[120vh] w-[90%] overflow-x-auto snap-x hide-scrollbar space-x-3"
            >
                {Slides.map((item) => (
                    <div
                        key={item.id}
                        className="min-w-[90%] md:min-w-[60%] h-full snap-center flex flex-col"
                    >
                        {/* Media */}
                        <div className="w-full h-[85%] overflow-hidden rounded-3xl relative bg-black">
                            {item.type === "video" && (
                                <video
                                    src={item.video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover rounded-3xl"
                                />
                            )}

                            {item.type === "image" && (
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover rounded-3xl"
                                />
                            )}
                        </div>

                        {/* Caption below image */}
                        <div className="pt-4 pr-6">
                            <p className="text-base md:text-xl leading-snug">
                                <span className="text-white font-semibold">
                                    {item.title}{" "}
                                </span>
                                <span className="text-[#86868B] font-semibold">
                                    {item.description}
                                    {item.footnote && (
                                        <sup className="ml-0.5">{item.footnote}</sup>
                                    )}
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PhoneCarousel;