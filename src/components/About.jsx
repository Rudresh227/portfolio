import React from "react";

const About = () => {
  return (
    <div name="about" className="h-screen w-full bg-[#0a192f]">
      <div className="max-w-[1000px] h-full mx-auto px-8 flex flex-col justify-center text-gray-300">
        <div>
          <h1 className="text-4xl sm:text-4xl font-bold inline-block text-[#ccd6f6] border-b-4 border-pink-600 py-1">
            About
          </h1>
        </div>
        <div>
          <p className="max-w-[900px] py-4 sm:text-lg text-[#8892b0]">
            Aspiring developer passionate about coding and creating efficient
            solutions. Currently pursuing B.Tech in Information Technology at
            Velammal Institute of Technology, Chennai, with a CGPA of 8.64.
            Skilled in Python, JavaScript, HTML5, CSS3, Tailwind CSS, and React JS,
            along with design tools like Figma and Canva.
          </p>
          <p className="max-w-[900px] py-4 sm:text-lg text-[#8892b0]">
            I have developed projects like a recipe website, a weather app, and
            the Scrap Smart platform, showcasing practical and impactful
            solutions. Active in workshops and co-curricular activities, I
            secured the Runners-up position in the Anna University Cricket Zonal
            Tournament and advanced to the final round of a hackathon with a
            period cramp remedy project. Eager to contribute to dynamic
            development teams and drive technological advancements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
