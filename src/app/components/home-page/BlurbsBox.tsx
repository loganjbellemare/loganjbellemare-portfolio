import React from "react";

type Props = {};

export default function BlurbsBox() {
  return (
    <div className="my-[20px] ml-2 box-border block text-[80%]">
      <h4 className="py-[2px] px-[7px] font-bold bg-gradient-to-r from-pink-400 via-pink-500 to-pink-400 text-yellow-200 w-full">
        Logan's Blurbs
      </h4>
      <div className="p-[7px]">
        <div className=" mb-[14px]">
          <h4 className="font-bold text-purple-500">About me:</h4>
          <p className="text-[12px] mb-[8px]">
            Full-stack developer with expertise in JavaScript/Typescript, React,
            Next.js, Node.js, Express, relational and non-relational databases.
          </p>
          <iframe
            src="https://www.youtube.com/embed/74VKxcC_k-4?si=cOk7_mKYk00YJjwM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; full-screen"
            className="sm:w-[230px] sm:h-auto md:w-[295px] md:h-auto lg:h-[315px] lg:w-[560px]"
          ></iframe>
        </div>
        <div className="mb-[14px]">
          <h4 className="font-bold text-purple-500">Who I'd like to meet:</h4>
          <p className="text-[12px] mb-[8px]">
            Honestly just want to know who hurt my mans, Vessel
          </p>
        </div>
      </div>
    </div>
  );
}
