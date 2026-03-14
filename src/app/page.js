import Image from "next/image";
import Hero from "./components/Hero";
import HighLights from "./components/HighLight";

export default function Home() {
  return (
    <section className=" bg-black flex flex-col h-full w-full">
    <Hero/>
    <HighLights/>

   </section>
  );
}
