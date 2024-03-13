"use client";
import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import classNames from "../utils/classNames";

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

export default function ProjectsView() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/apps/get");
      const data = await response.json();
      console.log("response from API", data);
      setProjects([...data.data]);
    };

    fetchData();
  }, []);

  return (
    <Container className={classNames("mt-1 md:mt-0 p-4 text-[80%]")}>
      <div className="text-center mb-3">
        <h2 className="font-bold text-lg">My Web Projects</h2>
        <p>Applications developed by yours truly{" <3"}</p>
      </div>
      <div className=" mx-[10%]">
        <MapProjects projects={projects} />
      </div>
    </Container>
  );
}

const MapProjects = ({ projects }: MapProjectsProps) => {
  return projects.map((project: Project) => (
    <div
      key={project.id}
      className="shadow-lg hover:shadow-inner rounded-lg p-5 gap-1 flex flex-col mb-3 bg-purple-300 text-center"
    >
      <h4 className="font-bold">{project.name}</h4>
      <p>{project.technologies}</p>
      <div>
        <a
          href={project.website}
          rel="noopener noreferrer"
          className="font-bold text-purple-500 hover:text-pink-400 focus:text-pink-400 focus:outline-none"
        >
          View Site
        </a>
        {" | "}
        <a
          href={project.github}
          rel="noopener noreferrer"
          className="font-bold text-purple-500 hover:text-pink-400 focus:text-pink-400 focus:outline-none"
        >
          View Codebase
        </a>
      </div>
    </div>
  ));
};
