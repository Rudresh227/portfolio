import React from "react";
import WeatherApp from "../assets/weather-app.png";
import RecipeSite from "../assets/recipe-site.png";
import CGPAGPA from "../assets/cgpa-gpa.png";
import Design from "../assets/design.png";

const Work = () => {
  return (
    <div name="work" className="h-screen w-full bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] h-full px-8 mx-auto flex flex-col justify-center">
        <div>
          <h1 className="text-4xl sm:text-4xl font-bold inline-block text-[#ccd6f6] border-b-4 border-pink-600 py-1">
            Work
          </h1>
          <p className="max-w-[900px] py-4 sm:text-lg text-[#8892b0]">
            Checkout some of my Recent Works
          </p>
        </div>
        {/* Grid container */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4  ">
          {/* Project-Box */}
          {/* Weather App */}
          <div className="shadow-md shadow-black rounded-md">
            <img src={WeatherApp} alt="" className="rounded-md" />
            <div className="flex justify-center items-center">
              <button className="px-4 hover:scale-105 p-3">Code</button>
            </div>
          </div>

          <div className="shadow-md shadow-black rounded-md">
            <img src={RecipeSite} alt="" className="rounded-md" />
            <div className="flex justify-center items-center">
              <button className="px-4 hover:scale-105 p-3">Code</button>
            </div>
          </div>

          <div className="shadow-md shadow-black rounded-md">
            <img src={CGPAGPA} alt="" className="rounded-md" />
            <div className="flex justify-center items-center">
              <button className="px-4 hover:scale-105 p-3">Code</button>
            </div>
          </div>

          <div className="shadow-md shadow-black rounded-md">
            <img src={Design} alt="" className="rounded-md" />
            <div className="flex justify-center items-center">
              <button className="px-4 hover:scale-105 p-3">Design</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
