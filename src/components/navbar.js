import React from 'react'
import '../buttonstyle.scss';

function navbar() {
  return (
    <nav className="bg-[#171717] text-white fixed w-full top-0">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div className="flex items-center">
        <img className="w-72" src={require("../img/marinescesarASCIIWhite.png")}alt="marinescesar" />
          <div className="ml-28 flex flex-row gap-6">
            <a href="/" className="testing">
              HOME
            </a>
            <a href="/" className="testing skills">
              SKILLS
            </a>
            <a href="/" className="testing projects">
              PROJECTS
            </a>
            <a href="/" className="testing about">
              ABOUT
            </a>
            <a href="/" className="testing contact">
              CONTACT
            </a>
          </div>
        </div>
      </div>
      <div className="h-px bg-white w-full"></div>
    </nav>
  )
}

export default navbar