import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export default function NavBar() {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      linkName: "About",
    },
    {
      id: 2,
      linkName: "Works",
    },
    {
      id: 3,
      linkName: "Contact",
    },
  ];
  return (
    <div className="xl-flex justify-center w-full bg-slate-800 z-[1] fixed">
      <div className="flex justify-between items-center h-20 px-[20px]  xl:max-w-[1440px] xl:mx-auto">
        <h1 className="text-3xl font-bold font-signature tracking-[7px] text-rose-300 cursor-pointer  hover:text-yellow-200 ">
          <Link to="Home" smooth duration={500}>
            Vince
          </Link>
        </h1>
        <ul className="gap-10 hidden md:flex">
          {links.map((link) => {
            return (
              <li
                key={link.id}
                className="list-none uppercase font-bold cursor-pointer text-rose-300 hover:text-yellow-200"
              >
                <Link to={link.linkName} smooth duration={500}>
                  {link.linkName}
                </Link>
              </li>
            );
          })}
        </ul>
        <div
          className="cursor-pointer md:hidden text-rose-300"
          onClick={() => {
            setNav(!nav);
          }}
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav ? (
          <ul className="flex flex-col justify-center items-center fixed left-0 top-0 h-[100vh] w-[100vw] gap-16 bg-slate-900 md:hidden z-[-1] duration-1000 ">
            {links.map((link) => {
              return (
                <li
                  key={link.id}
                  className="list-none uppercase font-bold cursor-pointer text-rose-300 hover:text-yellow-200 text-4xl"
                >
                  <Link to={link.linkName} smooth duration={500} onClick={() => setNav(!nav)}>
                    {link.linkName}
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <ul className="flex flex-col justify-center items-center fixed left-0 top-0 h-[100vh] w-[100vw] mt-[-100vh] gap-16 bg-slate-900 md:hidden  z-[-1] ">
            {links.map((link) => {
              return (
                <li
                  key={link.id}
                  className="list-none uppercase font-bold cursor-pointer text-rose-300 hover:text-yellow-200 text-4xl"
                >
                  <Link to={link.linkName} smooth duration={500} onClick={() => setNav(!nav)}>
                    {link.linkName}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
