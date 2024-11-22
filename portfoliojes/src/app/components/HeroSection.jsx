"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="sm:grid sm:grid-cols-12 flex flex-col">
        <div className="col-span-7 place-self-center text-center sm:text-left justify-self-start w-full">
          <h1 className="text-white lg:pb-16 mb-4 text-4xl md:text-6xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent webkit-bg-clip-text bg-gradient-to-r from-green-500 to-green-300">
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
          <div className="flex flex-col gap-4 w-full sm:flex-row items-center">
            <Link
              href="https://www.linkedin.com/in/jose-espasa-saval/"
              target="_blank"
              className="px-0.5 py-0.5  inline-block  w-full rounded-full bg-gradient-to-br from-green-500 via-green-300 to-cyan-200 hover:bh-slate-200 text-[#121212]">
              <span className="flex flex-row gap-3 px-3.5 py-3 w-full justify-center items-center font-medium hover:bg-gradient-to-br hover:to-green-100 hover:from-cyan-200  rounded-full">
                <Image
                  src="/images/linkedin.svg"
                  alt="linkedin icon"
                  width={20}
                  height={20}
                />
                LinkedIn
              </span>
            </Link>
            <Link
              className="px-0.5 py-0.5 w-full rounded-full bg-gradient-to-br from-green-500 via-green-300 to-cyan-200 hover:bh-slate-200"
              href="/Jose_Espasa_CV.pdf"
              target="_blank"
              download="Jose_Espasa_CV">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-3.5 py-3 text-white ">
                <span className="flex felx-row gap-3 justify-center items-center">
                  <Image
                    src="/images/pdf-icon.png"
                    alt="pdf icon"
                    width={20}
                    height={20}
                  />
                  Download CV
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
