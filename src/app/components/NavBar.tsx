import React from "react";
import Image from "next/image";
import Searchbar from "./Searchbar";
import { FaGithub } from "react-icons/fa";
import { BsMailboxFlag } from "react-icons/bs";

type Props = {};

export default function NavBar(props: Props) {
  return (
    <>
      <nav className=" sticky shadow-sm top-0 left-0 lg:max-w-[75%] sm:max-w-[100%] m-auto bg-violet-950 ">
        <div className=" h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto gap-2">
          <div className="flex items-center justify-center gap-2 ">
            <Image
              width={200}
              height={200}
              alt="mycodespace logo"
              src="https://iili.io/JG2tm3Q.png"
              className=" mt-1 flex"
            />
            <h2
              className=" md:text-3xl sm:text-lg
           mt-1 text-white"
            >
              Logan Bellemare
            </h2>
          </div>
          <section className="flex gap-2 items-center">
            <a
              href="https://github.com/loganjbellemare"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                title="View my GitHub account"
                className="md:text-2xl sm:text-lg text-purple-500 hover:opacity-80 focus:outline-none focus:opacity-80 cursor-pointer"
              />
            </a>
            <a href="mailto:loganbellemare444@gmail.com" target="_blank">
              <BsMailboxFlag
                title="email me!"
                className="md:text-2xl sm:text-lg text-purple-500 hover:opacity-80 focus:outline-none focus:opacity-80 cursor-pointer"
              />
            </a>
            {/** search bar in nav for bigger screens */}
            <div className="relative hidden md:flex">
              <Searchbar />
            </div>
          </section>
        </div>
      </nav>
      <div className="top-[80px] lg:max-w-[75%] sm:max-w-[100%] m-auto shadow-sm bg-purple-500">
        <ul className="h-[40px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto gap-2">
          <li>hello from ul</li>
        </ul>
      </div>
      {/** search bar appears under navbar on small screens */}
      <section className="flex items-center justify-center max-w-7xl px-3 md:hidden mt-1 mx-auto">
        <Searchbar />
      </section>
    </>
  );
}
