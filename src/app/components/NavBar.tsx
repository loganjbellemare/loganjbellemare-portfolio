"use client";
import React, { useState } from "react";
import Image from "next/image";
import Searchbar from "./Searchbar";
import { FaGithub } from "react-icons/fa";
import { BsMailboxFlag } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import NavLinks from "./NavLinks";
import { readProjectsByName } from "../../services/index";
type Props = {};

export default function NavBar(props: Props) {
  const [searchInput, setSearchInput] = useState("");
  const [projects, setProjects] = useState([]);
  const [err, setErr] = useState("");

  //search projects by searchInput on search submit
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
      //use service function to retrieve data from API
      const response = await readProjectsByName(searchInput);
      //save response in state
      setProjects(response);
      //set error to null on success
      setErr("");
    } catch (error: any) {
      console.error(error);
      setErr(error);
    }
  }

  function handleChange(value: string) {
    setSearchInput(value);
  }

  return (
    <>
      <nav className=" sticky shadow-sm top-0 z-50 left-0 xl:max-w-[75%] sm:max-w-[100%] m-auto bg-violet-950 ">
        <div className=" h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto gap-2">
          {/** logo */}
          <div className="flex items-center justify-center gap-2 ">
            <a href="#" className="cursor-pointer">
              <Image
                width={200}
                height={200}
                alt="mycodespace logo"
                src="https://iili.io/JG2tm3Q.png"
                className=" mt-1 flex md:w-auto"
              />
            </a>
            {/** main header */}
            <h2
              className=" md:text-3xl sm:text-lg
           mt-1 text-white"
            >
              Logan Bellemare
            </h2>
          </div>

          {/** section for icon links and search bar */}
          <section className="flex gap-2 items-center">
            <a
              href="https://www.linkedin.com/in/logan-bellemare444"
              target="_blank"
              rel="noopener noreferrer"
              className="focus:outline-none focus:opacity-80"
            >
              <FaLinkedin
                title="LinkedIn profile"
                className="md:text-2xl sm:text-lg text-purple-500 hover:opacity-80 cursor-pointer"
              />
            </a>
            <a
              href="https://github.com/loganjbellemare"
              target="_blank"
              rel="noopener noreferrer"
              className="focus:outline-none focus:opacity-80"
            >
              <FaGithub
                title="View my GitHub account"
                className="md:text-2xl sm:text-lg text-purple-500 hover:opacity-80  cursor-pointer"
              />
            </a>
            <a
              href="mailto:loganbellemare444@gmail.com"
              target="_blank"
              className="focus:outline-none focus:opacity-80 "
              rel="noopener noreferrer"
            >
              <BsMailboxFlag
                title="email me!"
                className="md:text-2xl sm:text-lg text-purple-500 hover:opacity-80 cursor-pointer"
              />
            </a>
            {/** search bar in nav for bigger screens */}
            <div className="relative hidden md:flex">
              <Searchbar
                value={searchInput}
                onSubmit={handleSubmit}
                onChange={(event) => handleChange(event.target.value)}
              />
            </div>
          </section>
        </div>
      </nav>
      {/** nav links */}
      <div className="top-[80px] xl:max-w-[75%] sm:mb-1 md:mb-0 sm:max-w-[100%] m-auto shadow-sm bg-purple-500">
        <NavLinks />
      </div>
      {/** search bar appears under navbar on small screens */}
      <section className="flex items-center justify-center max-w-7xl px-3 md:hidden mt-1 mx-auto">
        <Searchbar
          value={searchInput}
          onChange={(event) => handleChange(event.target.value)}
          onSubmit={handleSubmit}
        />
      </section>
    </>
  );
}
