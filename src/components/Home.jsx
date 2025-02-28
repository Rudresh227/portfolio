import React from "react";

export default function Home() {
  return (
    <div name="home" className="h-screen w-full bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] h-full mx-auto px-8 flex flex-col justify-center">
        <p className="text-pink-600 sm:text-xl">Hi,My Name is</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#ccd6f6] ">
          Rudresh Vasanth
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-[#8892b0]">
          I'm a Front End Developer
        </h2>
        <p className="max-w-[700px] py-4 sm:text-lg text-[#8892b0]">
          A front-end developer skilled in HTML, CSS, JavaScript, and React,
          focused on creating intuitive and responsive user interfaces.
          Passionate about delivering seamless user experiences and
          collaborating with design and development teams.
        </p>
        <div>
          <button className="border-2 text-white px-3 py-2 hover:bg-pink-700 hover:border-pink-700 duration-300 rounded-md">
            View Work
          </button>
        </div>
      </div>
    </div>
  );
}
