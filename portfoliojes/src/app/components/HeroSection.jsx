import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl sm:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">
              Hello, I&apos;m{" "}
            </span>
            JES
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Este es mi primer portforlio
          </p>
          <div className="">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-green-500 via-green-300 to-cyan-200 hover:bh-slate-200 text-white">
              Hire me
            </button>
            <button className="px-0.5 py-0.5 w-full sm:w-fit mt-3 rounded-full bg-gradient-to-br from-green-500 via-green-300 to-cyan-200 hover:bh-slate-200">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-3.5 py-3 text-white">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="rounded-full  w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
