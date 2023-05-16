import React from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import "../buttonstyle.scss";

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
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700"
              >
                HOME
              </a>
              <a
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700"
              >
                SKILLS
              </a>
              <a
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700"
              >
                PROJECTS
              </a>
              <a
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700"
              >
                ABOUT
              </a>
              <a
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700"
              >
                CONTACT
              </a>
            </div>
          </Disclosure.Panel>
          <div className="h-px bg-white w-full"></div>
        </>
      )}
    </Disclosure>
  );
}

export default navbar;
