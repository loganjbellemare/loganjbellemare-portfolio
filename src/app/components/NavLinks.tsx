import React from "react";

export default function NavLinks() {
  return (
    <ul className="h-[30px] w-full flex justify-center items-center max-w-7xl px-2 mx-auto gap-2 text-nowrap whitespace-nowrap">
      <li key={1} className="  md:after:content-['_|_'] ">
        <a
          href="#"
          className="hover:text-pink-400 focus:text-pink-400 focus:outline-none"
        >
          Home
        </a>
      </li>
      <li key={2} className=" md:after:content-['_|_']">
        <a
          href="/about"
          className=" hover:text-pink-400 focus:text-pink-400 focus:outline-none"
        >
          About
        </a>
      </li>
      <li key={3} className=" md:after:content-['_|_'] ">
        <a
          href="/projects"
          className="hover:text-pink-400 focus:text-pink-400 focus:outline-none"
        >
          Projects
        </a>
      </li>
      <li key={4} className=" md:after:content-['_|_'] ">
        <a
          href="/art"
          className="hover:text-pink-400 focus:text-pink-400 focus:outline-none"
        >
          Art
        </a>
      </li>
      <li key={5} className=" md:after:content-['_|_'] ">
        <a
          href="/art"
          className="hover:text-pink-400 focus:text-pink-400 focus:outline-none"
        >
          Resume
        </a>
      </li>
      <li key={6}>
        <a
          href="/contact"
          className="hover:text-pink-400 focus:text-pink-400 focus:outline-none"
        >
          Contact
        </a>
      </li>
    </ul>
  );
}
