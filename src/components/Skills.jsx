import React from 'react'
import html from '../assets/html-5.png'
import css from '../assets/css-3.png'
import js from '../assets/js.png'
import react from '../assets/science.png'
import python from '../assets/python.png'
import github from '../assets/github.png'
import figma from '../assets/figma.png'


const Skills = () => {
  return (
    <div name="skills" className="h-screen w-full bg-[#0a192f] text-gray-300"> 
        <div className='max-w-[1000px] h-full px-8 flex flex-col justify-center mx-auto'>
          {/* Heading and Paragraph */}
          <div>
            <h1 className="text-4xl sm:text-4xl font-bold inline-block text-[#ccd6f6] border-b-4 border-pink-600 py-1">Skills</h1>
            <p className="max-w-[900px] py-4 sm:text-lg text-[#8892b0]">These are the technologies I have worked with</p>
          </div>
          {/* Grid Icons */}
          <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
            {/* HTML */}
            <div className='shadow-md shadow-black hover:scale-105 duration-75 cursor-pointer'>
              <img className='w-20 mx-auto py-2' src={html} alt="HTML icon" /> 
              <p className='my-4'>HTML</p>
            </div>
            {/* CSS */}
            <div className='shadow-md shadow-black hover:scale-105 duration-75 cursor-pointer'>
              <img className='w-20 mx-auto py-2' src={css} alt="HTML icon" /> 
              <p className='my-4'>CSS</p>

            </div>

            <div className='shadow-md shadow-black hover:scale-105 duration-75 cursor-pointer'>
              <img className='w-20 mx-auto py-2' src={js} alt="HTML icon" /> 
              <p className='my-4'>JavaScript</p>

            </div>

            <div className='shadow-md shadow-black hover:scale-105 duration-75 cursor-pointer'>
              <img className='w-20 mx-auto py-2' src={react} alt="HTML icon" /> 
              <p className='my-4'>React JS</p>

            </div>

            <div className='shadow-md shadow-black hover:scale-105 duration-75 cursor-pointer'>
              <img className='w-20 mx-auto py-2' src={python} alt="HTML icon" /> 
              <p className='my-4'>Python</p>

            </div>

            <div className='shadow-md shadow-black hover:scale-105 duration-75 cursor-pointer'>
              <img className='w-20 mx-auto py-2' src={github} alt="HTML icon" /> 
              <p className='my-4'>Github</p>

            </div>

            <div className='shadow-md shadow-black hover:scale-105 duration-75 cursor-pointer'>
              <img className='w-20 mx-auto py-2' src={figma} alt="HTML icon" /> 
              <p className='my-4'>Figma</p>

            </div>

  
          </div>

        </div>
    </div>
  )
}

export default Skills
