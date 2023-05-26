import React from "react";
import { FaReact } from "react-icons/fa";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiVisualstudiocode,
  SiGithub,
} from "react-icons/si";
import { FaSass } from "react-icons/fa";

const skillCards = () => {
  const skills = [
    {
      id: 1,
      name: "HTML",
      img: <SiHtml5 size={100} color="#ff6600" />,
      shadowColor: "shadow-orange-500",
      textColor: "text-orange-500",
    },
    {
      id: 2,
      name: "CSS",
      img: <SiCss3 size={100} color="#1a1aff" />,
      shadowColor: "shadow-blue-600",
      textColor: "text-blue-600",
    },
    {
      id: 3,
      name: "Javascript",
      img: <SiJavascript size={100} color="#ffff33" />,
      shadowColor: "shadow-yellow-300",
      textColor: "text-yellow-300",
    },
    {
      id: 4,
      name: "Sass",
      img: <FaSass size={100} color="#ff4dc4" />,
      shadowColor: "shadow-pink-300",
      textColor: "text-pink-300",
    },
    {
      id: 5,
      name: "Tailwind",
      img: <SiTailwindcss size={100} color="#3399ff" />,
      shadowColor: "shadow-cyan-300",
      textColor: "text-cyan-300",
    },
    {
      id: 6,
      name: "React JS",
      img: <FaReact size={100} color="#1a1aff" />,
      shadowColor: "shadow-blue-600",
      textColor: "text-blue-600",
    },
    {
      id: 7,
      name: "Mongo DB",
      img: <SiMongodb size={100} color="#33cc33" />,
      shadowColor: "shadow-green-600",
      textColor: "text-green-600",
    },
    {
      id: 8,
      name: "VS Code",
      img: <SiVisualstudiocode size={100} color="#1a1aff" />,
      shadowColor: "shadow-blue-600",
      textColor: "text-blue-600",
    },
    {
      id: 9,
      name: "Git",
      img: <SiGithub size={100} color="white" />,
      shadowColor: "shadow-white",
      textColor: "text-white",
    },
  ];
  return (
    <div className="bg-slate-800">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10 py-[50px]">
        {skills.map((skill) => {
          return (
            <div
              className={"flex flex-col items-center gap-3 shadow-lg py-5 " + skill.shadowColor}
              id={skill.id}
            >
              <li>{skill.img}</li>
              <li className={"text-3xl " + skill.textColor}>{skill.name}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default skillCards;
