import React from "react";

const ExperienceSection = () => {
  return (
    <section className="bg-transparent text-white">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-gray-300">
              <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-green-300">
                <h3 className="text-xl font-semibold tracking-wide text-green-300">
                  Frontend Developer
                </h3>
                <h4 className="text-md font-semibold tracking-wide text-grey-400">
                  Jogo
                </h4>
                <time className="mt-1 text-xs tracking-wide uppercase text-gray-600">
                  August 2021 - now
                </time>
                <p className="mt-3">
                  I have been developing web apps with VUE 3 most of the time. I
                  have created new projects, components, responsive
                  interfaces... As well, I have also worked in the manteniece of
                  projects. The rest of the time, I have developed some projects
                  with REACT, I have jumped to backend to implement some new
                  feature or help building APIs.
                </p>
              </div>
              <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-green-300">
                <h3 className="text-xl font-semibold tracking-wide text-green-300">
                  Software Developer - Intern
                </h3>
                <h4 className="text-md font-semibold tracking-wide text-grey-400">
                  InDenova
                </h4>
                <time className="mt-1 text-xs tracking-wide uppercase text-gray-600">
                  Febrary 2020 - August 2020
                </time>
                <p className="mt-3">
                  It was my first contact with the development world. There I
                  work doing frontend and backend task. I used GWT, Struts, JPA
                  and MySQL to develop projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
