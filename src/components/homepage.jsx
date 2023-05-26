import React from "react";
import webDeveloper from "../components/undraw_web_developer_re_h7ie.svg";

const homepage = () => {
  return (
    <div>
      <div className="w-screen">
        <div className="bg-slate-800 min-h-[100vh] grid grid-cols-1 md:grid-cols-2 gap-x-[150px] xl:gap-x-[300px]">
          <div className="flex flex-col justify-center max-w-sm mx-auto text-rose-300 px-[20px] py-[60px] gap-2 lg:pl-[120px] lg:mr-0">
            <p className="text-lg xl:text-2xl">Hi I'm</p>
            <h1 className="font-extrabold text-5xl xl:text-8xl">Vince Ladrera</h1>
            <h2 className="text-lg xl:text-2xl">
              I'm a web developer with knowledge in both front-end and back-end technologies who is
              based in the Philippines.
            </h2>
          </div>
          <div className="mx-auto py-5 px-5 flex items-center max-w-sm lg:ml-0">
            <img src={webDeveloper} alt="" className=" object-cover w-[100%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default homepage;
