import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section className="text-white mt-5">
      <article>
        <div className="lg:grid lg:grid-cols-2 gap-8 justify-items-center items-center py-8 px-4 sm:py-16 xl:py-16">
          <Image
            className="mb-9 lg:mb-0 object-fill rounded-full drop-shadow-[0_0_10px_rgba(134,238,172,0.8)]"
            src="/images/desktop-jes.jpg"
            alt="desktop set up"
            width={350}
            height={350}
          />
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="[&>p]:mb-4">
              <p className="text-base lg:text-lg">
                My name is José, but on Internet I like to use my initials,
                <span className="font-bold text-[#86EEAC]"> JES</span>. I have
                more than{" "}
                <span className="font-bold text-[#86EEAC]">
                  3 years of experience
                </span>{" "}
                building web aplications for an important retailer company in
                the retail sector.
              </p>
              <p className="text-base lg:text-lg">
                In this years{" "}
                <span className="font-bold text-[#86EEAC]">
                  I have been especializated in Vue.js framework
                </span>
                , although I have created some aplications with React. As well,
                I jumped to the backend ecosistem to help them to implements
                some new features or APIs sometimes.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default AboutSection;
