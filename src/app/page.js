import Image from "next/image";
import Hero from "./components/Hero";
import HighLights from "./components/HighLight";
import ModelView from "./components/ModelView";
import Design from "./components/Design";
import Cameras from "./components/Cameras";

export default function Home() {
  return (
    <section className=" bg-black flex flex-col h-full w-full">
    <Hero/>
   
    <div className=" h-full w-full flex items-center justify-center flex-col bg-[#1D1D1F]">
    <HighLights/>
     <Design/>
    <ModelView/>
    </div>
    <br/>
    <Cameras/>

   </section>
  );
}
