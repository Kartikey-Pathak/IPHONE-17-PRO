import Image from "next/image";

export default function Hero() {
    return (
        <section className=" w-full min-h-screen bg-black flex flex-col items-center justify-center">
            <div className=" relative w-full flex items-center justify-center h-full">
                <div className=" p-1 h-[30rem] overflow-hidden md:h-full w-full flex items-center justify-center">
                    <div className=" h-full w-full absolute z-20 backdrop-blur-3xl ">

                    </div>

                    {/* Mobile blurred background
                    <Image src="/iphonehero17.jpg" width={1000} height={1000} alt="hero" className="block md:hidden object-contain absolute inset-0 z-10 opacity-80 backdrop-blur-2xl blur-3xl h-full w-full" /> */}
         
                    {/* Mobile main video */}
                    <video
                        src="https://www.apple.com/105/media/us/iphone-17-pro/2025/704d4474-8e63-4ce7-9917-bb47b1ca4ba0/anim/hero/xlarge_2x.mp4"
                        autoPlay
                        muted

                        playsInline
                        className="block object-contain absolute z-30 inset-0 h-full w-full md:hidden"
                    />

                    {/* Desktop video */}
                    <video
                        src="https://www.apple.com/105/media/us/iphone-17-pro/2025/704d4474-8e63-4ce7-9917-bb47b1ca4ba0/anim/hero/xlarge_2x.mp4"
                        autoPlay
                        muted

                        playsInline
                        className="hidden flex items-center justify-center absolute z-30 top-50 m-auto inset-0 md:block"
                    />

                    <div className=' cursor-pointer hover:bg-[#0071E3]/70 transition-all text-center text-white rounded-4xl flex items-center justify-center h-10 w-24 bg-[#0071E3]'>
                        <h1 className=' cursor-pointer text-white font-semibold'>Buy</h1>
                    </div>

                </div>

            </div>

            <div className=' cursor-pointer z-30 absolute -bottom-1 md:-bottom-50 hover:bg-[#0071E3]/70 transition-all text-center text-white rounded-4xl flex items-center justify-center h-10 w-24 bg-[#0071E3]'>
                <h1 className=' cursor-pointer text-white font-semibold'>Buy</h1>
            </div>

            <h1 className=' text-center absolute z-30 -bottom-30 md:-bottom-70 text-white font-semibold p-10'>
                From ₹134900.00* or ₹21650.00/mo. for 6 mo.
            </h1>

        </section>
    )
}