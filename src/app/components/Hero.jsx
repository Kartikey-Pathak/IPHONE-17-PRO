import Image from "next/image";

export default function Hero() {
    return (
        <section className=" w-full h-full bg-black flex items-center justify-center">
            <div className=" relative mt-15 w-full flex items-center justify-center h-full">
                <div className=" p-1 h-[30rem] overflow-hidden md:h-full w-full flex items-center justify-center">
                    <div className=" h-full w-full absolute z-20 backdrop-blur-3xl ">

                    </div>
                    <Image
                        src="/iphonehero17.jpg"
                        width={1000}
                        height={1000}
                        alt="hero"
                        className="block md:hidden object-contain absolute inset-0 z-10 opacity-80 backdrop-blur-2xl blur-3xl  h-full w-full"
                    />

                    <Image
                        src="/iphone2.png"
                        width={1000}
                        height={1000}
                        alt="hero"
                        className="block object-contain absolute z-30 inset-0 h-full w-full md:hidden"
                    />

                    {/* Desktop image */}
                    <Image
                        src="/iphonehero17.jpg"
                        width={1000}
                        height={1000}
                        alt="hero"
                        className="hidden flex items-center justify-center absolute z-30 top-70 m-auto inset-0 md:block"
                    />
                    <div className=' absolute z-30 top-124 md:top-120  cursor-pointer hover:bg-[#0071E3]/70 transition-all text-center text-white rounded-4xl flex items-center justify-center h-10 w-24 bg-[#0071E3]'>
                        <h1 className=' cursor-pointer text-white font-semibold'>Buy</h1>
                    </div>
                    <h1 className=' absolute z-30 top-124 mt-1 md:top-120  text-white font-semibold p-10'>From ₹134900.00* or ₹21650.00/mo. for 6 mo.</h1>
                </div>
            </div>

        </section>
    )
}