"use client"

import { Slides } from "../constants/static";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function VideoCarousel() {

  const vidref = useRef(null);

  useGSAP(() => {
    gsap.to(vidref.current, {
      delay: 2.2,
      y: -100,
      opacity: 1,
      scrollTrigger: {
        trigger: vidref.current,
        scrub: 2,
        start: "top 60%",
        end: "top 30%"
      }
    })
  }, [])

  return (
    <div className="w-full flex items-center justify-center mt-20 md:mt-1 bg-[#1D1D1F]">

      <div
        ref={vidref}
        className="opacity-0 flex items-center h-[85vh] md:h-[90vh] w-[90%] overflow-auto snap-x hide-scrollbar space-x-3"
      >

        {Slides.map((item) => (

          <div key={item.id} className="min-w-[90%] h-full snap-center">

            <div className="h-full w-full overflow-hidden shadow-lg rounded-3xl relative">

              {/* Text */}
              <div className="absolute top-6 w-full z-20 flex justify-center">
                <div className="text-center w-[80%]">
                  {item.texts.map((txt, index) => (
                    <h1 key={index} className="font-semibold text-white text-xl  md:text-3xl">
                      {txt}
                    </h1>
                  ))}
                </div>
              </div>

              {/* Video */}
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

              {/* Image */}
              {item.type === "image" && (
                <Image
                  src={item.image}
                  alt="slide"
                  fill
                  className="object-cover w-full h-full rounded-3xl"
                />
              )}

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default VideoCarousel;