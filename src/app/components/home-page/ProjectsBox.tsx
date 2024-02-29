"use client";
import React, { useState, useEffect } from "react";

type Project = {
  id: string;
  name: string;
  type: string;
  technologies: string;
  website: string;
  github: string;
  createdAt: string;
  updatedAt: string;
};

type Props = {};

export default function ProjectsBox(props: { projects: any[] }) {
  const [pinned, setPinned] = useState(props);
  console.log("props from project box", props.projects);

  return (
    <div className="box-border text-[80%] my-[2.33em] md:px-3 block">
      <h4 className="font-bold py-3">
        Logan's Latest Projects{" ["}
        <a
          href="/projects"
          className="text-purple-500 focus:outline-none focus:text-pink-400 hover:text-pink-400"
        >
          View Projects
        </a>
        {"] "}
        {/** add logic to check for projects.length, add projects props to be added from parent component */}
      </h4>
      <p className="py-3">find a profile with blog entries for ref</p>{" "}
    </div>
  );
}
