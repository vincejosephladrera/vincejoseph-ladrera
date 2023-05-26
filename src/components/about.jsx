import React from "react";
import HireMeButton from "./hireMeButton";
import SkillCards from "./skillCards.jsx";

const about = () => {
  return (
    <div name="About">
      <div className="w-screen overflow-x-hidden bg-slate-800 flex justify-center">
        <div className="flex flex-col justify-start pt-[120px] md:w-[75%] md:max-w-[1440px] bg-slate-800 min-h-screen gap-3 px-5 py-3">
          <h1 className=" text-4xl  uppercase underline text-rose-300 p-5 font-extrabold">
            About Me
          </h1>
          <p className="text-rose-300 px-5">
            Hi I'm <b>Vince Ladrera</b> I discovered my passion for Web Development last year during
            my time working as a Mechanical Engineer. As an individual who is very eager to develop
            new skills, I enrolled to different online courses. One of these courses is about Web
            Development, At first I was skeptical about finishing the course since it has nothing to
            do with my past work but as I try to alot time for the course, the joy I felt made me
            remember how I scrutinize with html codes when I was still a young highschool student
            using notepad which made me realize that those activities are the ones which I totally
            enjoyed.
          </p>
          <p className="text-rose-300 px-5">
            Fast forward to this day with this newly found passion, I am now pursuing my career in
            Web Development and still trying to learn new things through self study and bootcamp
            which I'm currently enrolled.
          </p>
          <div className="flex justify-center">
            <HireMeButton />
          </div>
          <h1 className="text-rose-300 px-5">
            Here are the list of skills I've acquired as of currently:
          </h1>
          <SkillCards />
        </div>
      </div>
    </div>
  );
};

export default about;
