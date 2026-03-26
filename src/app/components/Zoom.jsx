"use client"
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function Zoom() {
    const [active, setActive] = useState("200");
    const imageRef = useRef(null);



    const focalOptions = [
        { label: "200 mm", value: "200", img: "/2mm.jpg" },
        { label: "100 mm", value: "100", img: "/3mm.jpg" },
        { label: "48 mm", value: "48", img: "/4mm.jpg" },
        { label: "35 mm", value: "35", img: "/5mm.jpg" },
        { label: "28 mm", value: "28", img: "/6mm.jpg" },
        { label: "24 mm", value: "24", img: "/7mm.jpg" },
        { label: "13 mm", value: "13", img: "/8mm.jpg" },
        { label: "Macro", value: "macro", img: "/mmm.jpg" },
    ];
    const current = focalOptions.find((f) => f.value === active);


    useEffect(() => {
        // animate every time active changes
        gsap.fromTo(
            imageRef.current,
            { opacity: 0, scale: 1.05 },
            { opacity: 1, scale: 1, duration: 0.9, ease: "power2.out" }
        );
    }, [active]);
    return (
        <>
            <section className=" h-fit mt-10  w-full flex items-center justify-center">
                <div className=" h-full w-full flex items-center justify-center mt-40 flex-col">
                    <Image
                        ref={imageRef}
                        key={active}
                        height={1000}
                        width={1000}
                        src={current.img}
                    />

                    <div className="flex mt-10 bg-[#333336] rounded-full p-1">
                        {focalOptions.map((item) => (
                            <button
                                key={item.value}
                                onClick={() => setActive(item.value)}
                                className={` px-2 md:px-4 cursor-pointer py-2 rounded-full text-sm transition-all
              ${active === item.value
                                        ? "bg-gray-200 text-black"
                                        : "text-gray-200 hover:text-white"
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                            <div className=" h-64 w-full">d</div>
                </div>

        


            </section>
        </>
    )
}