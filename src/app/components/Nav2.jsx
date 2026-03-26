"use client"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)

function Nav2(){
    const navref=useRef(null);

     useGSAP(() => {
        gsap.to(navref.current, {
            opacity: 1,
            ease: "power1.inOut",
            duration: 1.5,
            scrollTrigger: {
                trigger: navref.current,
                start: "top -20%",
                end: "top -40%",
                scrub: true,
            }
        })
        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, [])


    return(
        <div className=' w-full flex items-center justify-center fixed top-0 z-50'>
        <div ref={navref} className=" opacity-0 fixed backdrop-blur-3xl justify-between items-center mt-2 top-0 z-50 w-[95%] md:w-[70%] flex-row flex h-14 bg-[#1D1D1F]/50 border-1 rounded-2xl  border-[#495057]">
            <h1 className=" text-[1rem] lg:text-xl ml-10 lg:ml-5 m-2 font-semibold text-white">
                iPhone 17 Pro
            </h1>
            <div className=" h-full w-[60%]  hidden lg:flex items-center justify-end gap-3 ">
                
                <br />
               <div className=' cursor-pointer hover:bg-[#1D1D1F] border-1 p-3 transition-all text-center text-white rounded-4xl flex items-center border-gray-400 justify-center h-7 w-16 bg-transparent'>
                <p className=' text-white text-sm  font-extralight'>Exlore</p>
            </div>
            <div className=' cursor-pointer hover:bg-[#0071E3]/70 mr-5 p-3 transition-all text-center text-white rounded-4xl flex items-center justify-center h-6 w-12 bg-[#0071E3]'>
                <p className=' text-white text-sm  font-light'>Buy</p>
            </div>
            
            </div>
            <div className='lg:hidden flex text-center justify-center m-3 mr-5'>
            <div className=' cursor-pointer hover:bg-[#0071E3]/70 transition-all text-center text-white rounded-4xl flex items-center justify-center h-6 w-16 bg-[#0071E3]'>
                <h1 className=' text-white font-semibold'>Buy</h1>
            </div>
            </div>
        </div>
        </div>
    )
}
export default Nav2;