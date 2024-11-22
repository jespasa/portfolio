import React from "react";
import Image from "next/image";
import ExperienceSection from "./ExperienceSection";

const SkillsSections = () => {
  return (
    <section>
      <div className="flex flex-col mt-10 lg:mt-28">
        <article>
          <h2 className="mr-3 text-2xl font-semibold hover:text-white text-[#ADB7BE] border-b border-green-300">
            Experience
          </h2>
          <ExperienceSection />
        </article>
        <article id="skills" className="scroll-mt-14 sm:scroll-mt-10">
          <h2 className="mr-3 mt-8 text-2xl font-semibold hover:text-white text-[#ADB7BE] border-b border-green-300">
            Skills
          </h2>
          <ul className="grid grid-cols-3 md:grid-cols-5 gap-5 mt-4 justify-items-center items-center">
            <li className="items-center px-4 py-2">
              <Image
                src="/images/vue-logo.png"
                alt="vue logo"
                width={75}
                height={75}
                className="drop-shadow-[0_0_10px_rgba(134,238,172,0.5)]"
              />
            </li>
            <li className="items-center px-4 py-2">
              <Image
                src="/images/react-logo.png"
                alt="react logo"
                width={75}
                height={75}
                className="drop-shadow-[0_0_10px_rgba(134,238,172,0.5)]"
              />
            </li>
            <li className="items-center px-4 py-2">
              <Image
                src="/images/html-logo.png"
                alt="html logo"
                width={75}
                height={75}
                className="drop-shadow-[0_0_10px_rgba(134,238,172,0.5)]"
              />
            </li>
            <li className="items-center px-4 py-2 ">
              <Image
                src="/images/JavaScript-logo.png"
                alt="JavaScript logo"
                width={75}
                height={75}
                className="drop-shadow-[0_0_10px_rgba(134,238,172,0.5)]"
              />
            </li>

            <li className="items-center px-4 py-2">
              <Image
                src="/images/nextjs-logo.svg"
                alt="nextjs logo"
                width={75}
                height={75}
                className="drop-shadow-[0_0_10px_rgba(134,238,172,0.5)]"
              />
            </li>
          </ul>
          <ul className="grid grid-cols-3 md:grid-cols-5 gap-5 mt-4 justify-items-center items-center">
            <li className="items-center px-4 py-2">
              <Image
                src="/images/css-logo.png"
                alt="css logo"
                width={75}
                height={75}
                className="drop-shadow-[0_0_10px_rgba(134,238,172,0.5)]"
              />
            </li>
            <li className="items-center px-4 py-2">
              <Image
                src="/images/tailwind-logo.png"
                alt="css logo"
                width={75}
                height={75}
                className="drop-shadow-[0_0_10px_rgba(134,238,172,0.5)]"
              />
            </li>
          </ul>
          <ul className="grid grid-cols-3 md:grid-cols-5 gap-5 mt-4 justify-items-center items-center">
            <li className="items-center px-4 py-2">
              <Image
                src="/images/springboot-logo.png"
                alt="nextjs logo"
                width={75}
                height={75}
                className="drop-shadow-[0_0_10px_rgba(134,238,172,0.5)]"
              />
            </li>
            <li className="items-center px-4 py-2">
              <Image
                src="/images/mysql-logo.png"
                alt="nextjs logo"
                width={75}
                height={75}
                className="drop-shadow-[0_0_10px_rgba(134,238,172,0.5)]"
              />
            </li>
          </ul>
        </article>
        <article>
          <h2 className="mr-3 mt-12 text-2xl font-semibold hover:text-white text-[#ADB7BE] border-b border-green-300">
            Projects
          </h2>
          <Image
            src="/images/building-green.png"
            alt="building page image"
            width={500}
            height={500}
            className="drop-shadow-[0_0_10px_rgba(134,238,172,0.5)] mt-10 justify-self-center"
          />
          <h5 className="text-[#ADB7BE] text-sm mt-4 justify-self-center">
            This portfolio is my first personal project. I&apos;m working in a
            new one.
          </h5>
        </article>
      </div>
    </section>
  );
};

export default SkillsSections;
