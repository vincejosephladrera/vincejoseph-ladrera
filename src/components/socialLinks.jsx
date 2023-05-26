import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const socialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={40} />
        </>
      ),
      href: "https://www.linkedin.com/in/ladreravincejoseph/",
      style: "rounded-tr-lg",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={40} />
        </>
      ),
      href: "https://github.com/vincejosephladrera",
      style: "",
    },
    {
      id: 3,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={40} />
        </>
      ),
      href: "https://drive.google.com/uc?export=download&id=16HixqQExhaHbk-n8BcGvyCzQQtL-F__y",
      style: "rounded-br-lg",
    },
  ];
  return (
    <div>
      <ul className="flex-col hidden lg:flex fixed left-[0px] top-[40vh] z-40">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a
                href={link.href}
                className={
                  "bg-rose-300 flex gap-2 items-center text-lg p-2 w-40 h-14 ml-[-103px] justify-end hover:ml-[-10px] hover:rounded-md duration-300" +
                  " " +
                  link.style
                }
                target="_blank"
                rel="noreferrer"
              >
                {link.child}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default socialLinks;
