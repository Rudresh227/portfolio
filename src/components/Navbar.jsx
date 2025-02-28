import React, { useState } from "react";
import { Link, Element } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { ImProfile } from "react-icons/im";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[90px] p-4 flex justify-between items-center bg-[#0a192f] text-gray-300">
      {/* Logo */}
      <div>
        <h1 className="text-2xl text-pink-600 font-bold sm:px-4" style={{fontFamily: "Bodoni Moda"}}>RV</h1>
      </div>

      {/* Menu */}
      <div>
        <ul className="hidden md:flex">
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              offset={-90} // Adjust offset according to your fixed navbar height
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className="cursor-pointer md:hidden z-10">
        {(!nav) ? <RxHamburgerMenu /> : <IoCloseSharp />}
      </div>

      {/* MobileMenu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center"
        }
      >
        <li className="p-2 text-lg">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            offset={-90}
            onClick={() => setNav(false)}
          >
            Home
          </Link>
        </li>
        <li className="p-2 text-lg">
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-90}
            onClick={() => setNav(false)}
          >
            About
          </Link>
        </li>
        <li className="p-2 text-lg">
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            offset={-90}
            onClick={() => setNav(false)}
          >
            Skills
          </Link>
        </li>
        <li className="p-2 text-lg">
          <Link
            to="work"
            spy={true}
            smooth={true}
            duration={500}
            offset={-90}
            onClick={() => setNav(false)}
          >
            Work
          </Link>
        </li>
        <li className="p-2 text-lg">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-90}
            onClick={() => setNav(false)}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* SocialIcons */}
      <div className="hidden lg:flex fixed top-[35%] left-0">
        <ul>
          {/* Linkedin */}
          <li className="w-[160px] h-[50px] flex justify-center ml-[-105px] hover:ml-[0px] duration-300 bg-[#0A66C2]">
            <a href="/" className="w-full flex justify-between items-center">Linkedin <FaLinkedin size={30} /></a>
          </li>
          {/* Github */}
          <li className="w-[160px] h-[50px] flex justify-center ml-[-105px] hover:ml-[0px] duration-300 bg-[#010409]">
            <a href="/" className="w-full flex justify-between items-center">GitHub <FaGithub size={30} /></a>
          </li>
          {/* Mail */}
          <li className="w-[160px] h-[50px] flex justify-center ml-[-105px] hover:ml-[0px] duration-300 bg-yellow-600">
            <a href="/" className="w-full flex justify-between items-center">Mail <LuMail size={30} /></a>
          </li>
          {/* Resume */}
          <li className="w-[160px] h-[50px] flex justify-center ml-[-105px] hover:ml-[0px] duration-300 bg-gray-700">
            <a href="/" className="w-full flex justify-between items-center">Resume <ImProfile size={30} /></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
