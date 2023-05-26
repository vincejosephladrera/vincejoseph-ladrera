import React from "react";
import ImageOne from "./React-Personal-Website.jpg";
import ImageTwo from "./personal-website.jpg";
import ImageThree from "./Petshop-ecommerce.jpg";
import ImageFour from "./calculator.jpg";

const projects = [
  {
    name: "Personal Portfolio Website",
    img: ImageOne,
    description:
      "Personal Portfolio Website is a static website made to showcase all my works using React JS and Tailwind.",
    livelink: "",
    codelink: "",
  },
  {
    name: "Old Portfolio Website",
    img: ImageTwo,
    description: "A personal portfolio showcasing my knowledge in HTML, CSS, JavaScript and Sass.",
    livelink: "https://vincejosephladrera.github.io/capstone-ladrera/",
    codelink: "https://github.com/vincejosephladrera/capstone-ladrera",
  },
  {
    name: "Pet Shop",
    img: ImageThree,
    description:
      "An ongoing ecommerce project which will be made using MERN Stack and Tailwind. Responsive landing page completed functionalities will soon be added.",
    livelink: "",
    codelink: "",
  },
  {
    name: "JavaScript Calculator",
    img: ImageFour,
    description:
      "My Calculator is a simple functional calculator app which JavaScript array methods, string methods and DOM manipulation.",
    livelink: "https://vincejosephladrera.github.io/Calculator",
    codelink: "https://github.com/vincejosephladrera/Calculator",
  },
];

const works = () => {
  return (
    <div>
      <div className="min-h-screen bg-slate-800 px-5 text-rose-300 w-screen flex justify-center">
        <div className="flex flex-col flex-grow max-w-[1440px] gap-4">
          <h1 className="uppercase pt-[120px] text-4xl underline font-extrabold">My Works</h1>
          <div className="bg-slate-800">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-20 gap-x-10 py-[50px] place-items-center">
              {projects.map((project) => {
                return (
                  <li className="shadow-xl h-[500px] w-[260px] shadow-red-400  px-5 flex py-5 flex-col gap-y-4">
                    <div className="h-[40%] py-5">
                      <img src={project.img} alt="" className="object-cover h-[100%]" />
                    </div>
                    <div className="h-[5%] py-3">{project.name}</div>
                    <div className="h-[40%]">{project.description}</div>
                    <div className="flex gap-5 justify-center h-[15%]">
                      <a
                        href={project.livelink}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-red-400 p-3 rounded-xl text-slate-800 font-bold hover:bg-yellow-200 text-center"
                      >
                        View Live
                      </a>
                      <a
                        href={project.codelink}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-red-400 p-3 rounded-xl text-slate-800 font-bold hover:bg-yellow-200 text-center"
                      >
                        View Code
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default works;
