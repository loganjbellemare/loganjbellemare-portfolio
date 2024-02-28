"use client";
import React, { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { GiStarMedal } from "react-icons/gi";
import { TbMessage } from "react-icons/tb";
import { ImForward } from "react-icons/im";
import { CiMail } from "react-icons/ci";
import { FaCircleExclamation } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";
import { GiFlyingFlag } from "react-icons/gi";
import { usePathname } from "next/navigation";

export default function ContactBox() {
  const pathName = usePathname();
  const [copied, setCopied] = useState<boolean>(false);

  function copyToClipboard(text: string): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      try {
        await navigator.clipboard.writeText(text);
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  }

  async function useCopyToClipboard() {
    if (window.confirm("Copy URL?")) {
      try {
        await copyToClipboard(pathName);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000); // Reset "copied" state after 2 seconds
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }

    return;
  }

  return (
    <div className="w-full border-2 border-purple-500 text-[80%]">
      {/** header */}
      <div className="w-full bg-purple-500 py-[2px] px-[7px] box-border text-white">
        <h4>
          <b>Contacting Logan</b>
        </h4>
      </div>
      {/** contact links */}
      <div className="py-[2px] px-[7px] box-border font-bold text-nowrap sm:block md:table-cell align-top sm:text-xs md:text-[80%]">
        {/** first row */}
        <div className="w-full table table-fixed m-[7px]">
          <div className="table-cell box-border align-top">
            <a
              href="https://www.linkedin.com/in/logan-bellemare444"
              target="_blank"
              rel="noopener noreferrer"
              className="flex hover:text-pink-400 focus:outline-none focus:text-pink-400"
            >
              <FaCirclePlus className=" text-lime-300 pr-1 text-lg" />
              Add to Friends
            </a>
          </div>
          <div className="table-cell box-border align-top">
            <a
              className="flex hover:text-pink-400 focus:outline-none focus:text-pink-400"
              href="https://github.com/loganjbellemare/loganjbellemare-portfolio"
              rel="noopener noreferrer"
              target="_blank"
            >
              <GiStarMedal className="text-yellow-300 pr-1 text-lg" />
              Add to Favorites
            </a>
          </div>
        </div>
        {/** second row */}
        <div className="w-full table table-fixed m-[7px]">
          <div className="table-cell align-top box-border">
            <a
              href="/contact"
              className="flex hover:text-pink-400 focus:outline-none focus:text-pink-400"
            >
              <TbMessage className="text-sky-300 pr-1 text-lg" />
              Send Message
            </a>
          </div>
          <div className="table-cell align-top box-border">
            <button
              className="flex hover:text-pink-400 outline-none focus:outline-none focus:text-pink-400"
              onClick={useCopyToClipboard}
            >
              <ImForward
                className="text-lime-300 pr-1 text-lg"
                title="copy URL to clipboard"
              />
              Forward/Share
            </button>
          </div>
        </div>
        {/** third row */}
        <div className="w-full table table-fixed m-[7px]">
          <div className="table-cell align-top box-border">
            <a
              className="flex hover:text-pink-400 focus:outline-none focus:text-pink-400"
              href="mailto:loganbellemare444@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <CiMail className="pr-1 text-lg text-sky-300" />
              Instant Message
            </a>
          </div>
          <div className="table-cell align-top box-border">
            <a className="flex hover:text-pink-400 focus:outline-none focus:text-pink-400">
              <FaCircleExclamation className="pr-1 text-lg text-red-500" />
              Block User
            </a>
          </div>
        </div>
        {/** fourth row */}
        <div className="w-full table table-fixed m-[7px]">
          <div className="table-cell align-top box-border">
            <a
              className="flex hover:text-pink-400 focus:outline-none focus:text-pink-400"
              href="https://github.com/loganjbellemare"
              rel="noopener noreferrer"
              target="_blank"
            >
              <IoPeopleSharp className="pr-1 text-lg text-yellow-300" />
              Add to GitHub
            </a>
          </div>
          <div className="table-cell align-top box-border">
            <a
              className="flex hover:text-pink-400 focus:outline-none focus:text-pink-400"
              href="mailto:loganbellemare444@gmail.com?subject=Bug%20Report"
              rel="noopener noreferrer"
              target="_blank"
            >
              <GiFlyingFlag className="pr-1 text-lg text-red-500" />
              Report Bug
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
