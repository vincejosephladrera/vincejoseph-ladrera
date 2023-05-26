import React from "react";
import { MdOutlineEmail, MdOutlineAlternateEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const contatctMe = () => {
  return (
    <div>
      <div className="w-screen flex justify-center bg-slate-800">
        <div className="min-h-fit pt-[120px] max-w-[1440px] flex justify-start flex-grow flex-col px-5 gap-5 py-5">
          <h1 className="text-4xl uppercase underline text-rose-300 font-extrabold">Contact Me</h1>
          <div className="flex md:items-center gap-x-4 flex-col md:flex-row">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <MdOutlineEmail color="rgb(253 164 175)" size={40} />
              <h2 className="text-lg text-rose-300">Email me</h2>
              <MdOutlineAlternateEmail color="rgb(253 164 175)" size={40} />
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <h2 className="text-lg text-rose-300">ladreravincejoseph@gmail.com</h2>
            </div>
          </div>

          <div className="flex md:items-center gap-x-4 flex-col md:flex-row">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <BsFillTelephoneFill color="rgb(253 164 175)" size={40} />
              <h2 className="text-lg text-rose-300">Message me</h2>
              <MdOutlineAlternateEmail color="rgb(253 164 175)" size={40} />
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <h2 className="text-lg text-rose-300">09457012999</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contatctMe;
