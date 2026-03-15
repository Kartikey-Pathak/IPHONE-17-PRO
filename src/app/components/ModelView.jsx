"use client"
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import Model from './Model';
import { useGSAP } from '@gsap/react';  
import gsap from 'gsap';       
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);
function ModelView() {
    const headingref=useRef(null);
    const modelref=useRef(null);

    useGSAP(()=>{
        gsap.to(headingref.current,{
             opacity:1,
             delay:0.3,
             y:20,
             scrollTrigger:{
                scroller:"body",
                trigger:headingref.current,
                scrub:2,
                start:"top 70%",
                end:"top 50%"
            }
        })
        gsap.to(modelref.current,{
             opacity:1,
             delay:0.3,
             y:-40,
             scrollTrigger:{
                scroller:"body",
                trigger:modelref.current,
                scrub:2,
                start:"top 70%",
                end:"top 50%"
            }
        })

    },[])

    return (
        <section className=' flex mb-40 items-center justify-center  flex-col w-full h-full'>
        <div className="w-full flex items-center justify-center flex-col max-w-screen h-[48rem] md:h-[50rem] bg-[#1C1C1C]">
            <div ref={headingref} className="m-15 opacity-0">
                <h1 className=" text-2xl md:text-4xl lg:text-5xl font-semibold text-white">Take a closer look.</h1>
            </div>

            <div className=' flex items-center w-full justify-center bg-black md:w-[90%] pt-10 rounded-xl md:rounded-4xl '>
                <div ref={modelref} className=' opacity-0 flex flex-col items-center  h-[38rem] w-[40%]  min-w-[15rem] '>
                    <Model/>
                    <span className="text-white">iPhone 17 Pro</span>
                </div>
            </div>

        </div>
        </section>
    )
}
export default ModelView;