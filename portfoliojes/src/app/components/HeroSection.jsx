"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="sm:grid sm:grid-cols-12 flex flex-col">
        <div className="col-span-7 place-self-center text-center sm:text-left justify-self-start w-full">
          <h1 className="text-white lg:pb-16 mb-4 text-4xl md:text-6xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "JES",
                1000,
                "Web App Developer",
                1000,
                "Web Developer",
                1000,
                "Frontend Developer",
                1000,
              ]}
              style={{
                whiteSpace: "pre-line",
                height: "100px",
                display: "block",
              }}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
        </div>
        <div className="flex flex-col items-center gap-4 col-start-9 col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="rounded-full  w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
          {/*           <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl">
            Facta, non verba
          </p> */}
          <div>
            <button className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-green-500 via-green-300 to-cyan-200 hover:bh-slate-200 text-[#121212]">
              Hire me
            </button>
            <button className="px-0.5 py-0.5 w-full sm:w-fit mt-3 rounded-full bg-gradient-to-br from-green-500 via-green-300 to-cyan-200 hover:bh-slate-200">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-3.5 py-3 text-white">
                Download CV
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
