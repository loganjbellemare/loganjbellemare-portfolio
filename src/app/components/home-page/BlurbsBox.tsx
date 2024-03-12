import React from "react";

type Props = {};

export default function BlurbsBox() {
  return (
    <div className="my-[20px] ml-2 box-border block text-[80%]">
      <h4 className="py-[2px] px-[7px] font-bold bg-pink-400 text-yellow-200 w-full">
        Logan's Blurbs
      </h4>
      <div className="p-[7px]">
        <div className=" mb-[14px]">
          <h4 className="font-bold text-purple-500">About me:</h4>
          <p className="text-[12px] mb-[8px]">
            Full-stack developer with expertise in JavaScript/Typescript, React,
            Next.js, Node.js, Express, relational and non-relational databases.
          </p>
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
