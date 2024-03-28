import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsMailboxFlag } from "react-icons/bs";
import NavLinks from "./NavLinks";

export default function Footer() {
  return (
    <footer className="text-center text-[70%] my-[10px] sticky">
      <p className=" align-middle mt-[10px] mb-[5px]">
        Riolu coded&#8480; by{" "}
        <a
          href="https://github.com/loganjbellemare"
          className="hover:text-pink-400 focus:text-pink-400 focus:outline-none active:text-white visited:text-lime-400"
        >
          Logan Bellemare
        </a>
      </p>
      <i className="align-middle mt-[10px] mb-[5px]">
        Disclaimer: This is a fan-based project and is not affiliated with
        MySpace&copy; or SpaceHey&#169; in any way.
      </i>
      {/** nav links */}
      <NavLinks />
      {/** icon links to socials, contact, and about */}
      <section className="mt-[4px] mb-[5px] flex text-center justify-center content-center gap-2 items-center text-[100%]">
        <a
          href="https://www.linkedin.com/in/logan-bellemare444"
          target="_blank"
          rel="noopener noreferrer"
          className="focus:outline-none focus:opacity-80"
        >
          <FaLinkedin
            title="LinkedIn profile"
            className="md:text-2xl sm:text-lg hover:opacity-80 cursor-pointer"
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
            className="md:text-2xl sm:text-lg hover:opacity-80  cursor-pointer"
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
            className="md:text-2xl sm:text-lg hover:opacity-80 cursor-pointer"
          />
        </a>
      </section>
      <p className="mt-[10px] mb-[5px] text-[90%]">
        &copy;2024 Logan Bellemare
      </p>
    </footer>
  );
}
