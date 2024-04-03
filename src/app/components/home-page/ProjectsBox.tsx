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

interface MapProjectsProps {
  projects: Project[];
}

export default function ProjectsBox(props: { projects: Project[] }) {
  const [pinned, setPinned] = useState(props.projects);
  useEffect(() => {
    const sortedProjects = props.projects.sort((a: Project, b: Project) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return dateB - dateA;
    });

    if (sortedProjects.length > 6) {
      setPinned(sortedProjects.slice(0, 6));
    } else {
      setPinned(sortedProjects);
    }
  }, [props]);

  return (
    <div className="text-[80%] md:px-3">
      <h4 className="font-bold">
        Logan&apos;s Latest Projects{" ["}
        <a
          href="/projects"
          className="text-purple-500 focus:outline-none focus:text-pink-400 hover:text-pink-400"
        >
          View Projects
        </a>
        {"] "}
      </h4>

      <MapProjects projects={pinned} />
    </div>
  );
}

function MapProjects({ projects }: MapProjectsProps) {
  if (!projects.length) {
    return <i>There are no projects yet...</i>;
  }

  return projects.map((project: Project) => (
    <p key={project.id} className=" me-[0px] ms-[0px] block">
      {project.name}
      {" - ("}
      <a
        href={project.website}
        rel="noopener noreferrer"
        target="_blank"
        className="text-purple-500 hover:text-pink-400 focus:text-pink-400 focus:outline-none"
      >
        view more
      </a>
      {")"}
    </p>
  ));
}
