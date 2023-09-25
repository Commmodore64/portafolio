import React from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import "../buttonstyle.scss";
import { Link } from 'react-router-dom';

function navbar() {
  return (
    <Disclosure as="nav" className="bg-[#171717] text-white fixed w-full top-0">
      {({ open }) => (
        <>
          <div className="container mx-auto py-4 flex justify-between items-center">
            <div className="flex items-center">
              <img
                className="w-72"
                src={require("../img/marinescesarASCIIWhite.png")}
                alt="marinescesar"
              />
            </div>
            <div className="ml-6 sm:hidden">
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="hidden sm:flex sm:items-center">
              <Link to="/" className="testing">
                HOME
              </Link>
              <Link to="/Skills" className="testing skills">
                SKILLS
              </Link>
              <Link to="/" className="testing projects">
                PROJECTS
              </Link>
              <Link to="/" className="testing about">
                ABOUT
              </Link>
              <Link to="/" className="testing contact">
                CONTACT
              </Link>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700"
              >
                HOME
              </Link>
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700"
              >
                SKILLS
              </Link>
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700"
              >
                PROJECTS
              </Link>
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700"
              >
                ABOUT
              </Link>
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700"
              >
                CONTACT
              </Link>
            </div>
          </Disclosure.Panel>
          <div className="h-px bg-white w-full"></div>
        </>
      )}
    </Disclosure>
  );
}

export default navbar;
