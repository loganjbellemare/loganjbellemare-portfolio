"use client";
import React, { Suspense, useEffect, useState } from "react";
import Container from "../components/Container";
import classNames from "../utils/classNames";
import { ImCheckmark } from "react-icons/im";
import Image from "next/image";
import { useQueryState } from "nuqs";
import { useSearchParams } from "next/navigation";

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
  const [toggleState, setToggleState] = useQueryState("type", {
    history: "push",
  });
  const [projects, setProjects] = useState<any[]>([]);
  const search = useSearchParams().get("search");

  function checkForSearchParams() {
    if (search) {
      return true;
    } else return false;
  }

  // load project data depending on toggleState value
  useEffect(() => {
    const fetchData = async () => {
      // if toggleState is set to art, return art projects
      if (toggleState === "art") {
        // check for search params, return filtered results if so
        if (checkForSearchParams()) {
          const response = await fetch(`/api/art/get?search=${search}`);
          const data = await response.json();
          console.log("response from API", data);
          setProjects([...data.data]);
          // return all art projects if no search params
        } else {
          const response = await fetch("/api/art/get"); //get art projects when toggleState is set to 'art'
          const data = await response.json();
          console.log("response from API", data);
          setProjects([...data.data]);
        }

        // if toggleState is set to apps, return app projects
      } else {
        // check for search params, and return filtered projects if so
        if (checkForSearchParams()) {
          const response = await fetch(`/api/apps/get?search=${search}`);
          const data = await response.json();
          console.log("response from API", data);
          setProjects([...data.data]);
          // else return all app projects
        } else {
          const response = await fetch("/api/apps/get"); //get application projects when toggleState is set to 'app'
          const data = await response.json();
          console.log("response from API", data);
          setProjects([...data.data]);
        }
      }
    };

    fetchData();
  }, [toggleState]);

  function handleClick() {
    const url = new URL(location.href);
    url.searchParams.delete("search");
    const noParamsUrl = url.toString().split("?")[0];
    history.pushState({}, "", noParamsUrl);
  }

  return (
    <Container className={classNames("mt-1 md:mt-0 p-4 text-[80%]")}>
      <div className="mb-3 w-[80%] mx-auto py-[8px]">
        {/** page header */}
        <h2 className="font-bold text-[1.5em] my-[.83em]">Browse Projects</h2>
        {/** filter toggler */}
        {toggleState === "art" ? (
          // display 'art' text bold and with check icon when toggleState is set to 'art'
          <p className="my-[1em]">
            Filter:{" "}
            <a
              onClick={() => {
                handleClick();
                setToggleState("app");
              }}
              className="hover:text-pink-400 cursor-pointer focus:outline-none focus:text-pink-400 text-purple-500 "
            >
              Web Apps
            </a>
            {" | "}
            <a
              onClick={() => {
                handleClick();
                setToggleState("art");
              }}
              className="hover:text-pink-400 cursor-pointer focus:outline-none focus:text-pink-400 text-purple-500 font-bold"
            >
              <ImCheckmark className="text-lime-400 inline-block mr-1" />
              My Art
            </a>
          </p>
        ) : (
          // display 'app' text bold and with check icon when toggleState is set to 'app'
          <p className="my-[1em]">
            Filter:{" "}
            <a
              onClick={() => {
                handleClick();
                setToggleState("app");
              }}
              className="hover:text-pink-400 focus:outline-none cursor-pointer focus:text-pink-400 text-purple-500 font-bold"
            >
              <ImCheckmark className="text-lime-400 inline-block mr-1" />
              Web Apps
            </a>
            {" | "}
            <a
              onClick={() => {
                handleClick();
                setToggleState("art");
              }}
              className="hover:text-pink-400 focus:outline-none cursor-pointer focus:text-pink-400 text-purple-500"
            >
              My Art
            </a>
          </p>
        )}
        {/** project box */}
        <div className="border border-purple-500 my-[1em]">
          {/** projects box header */}
          <div className="px-[4px] py-[8px] bg-purple-500 text-white font-bold">
            <h4>Projects</h4>
          </div>
          {/** projects display */}
          <div className="px-[4px] py-[8px] flex flex-col justify-between content-center">
            <MapProjects projects={projects} />
          </div>
        </div>
      </div>
    </Container>
  );
}

const MapProjects = ({ projects }: MapProjectsProps) => {
  return projects.map((project: Project) => (
    <div key={project.id} className="mx-[5px] my-[10px] text-center">
      {project.type === "app" ? (
        // display both link to deployed site and github repo if project is an application
        <div key={project.id}>
          <p className="font-bold py-2">{project.name}</p>
          <p className="py-2">{project.technologies}</p>
          <div>
            <a
              href={project.website}
              rel="noopener noreferrer"
              target="_blank"
              className="font-bold text-purple-500 hover:text-pink-400 focus:text-pink-400 focus:outline-none py-2"
            >
              View Site
            </a>
            {" | "}
            <a
              href={project.github}
              rel="noopener noreferrer"
              target="_blank"
              className="font-bold text-purple-500 hover:text-pink-400 focus:text-pink-400 focus:outline-none py-2"
            >
              View Codebase
            </a>
          </div>
        </div>
      ) : (
        // display thumbnail image and link to full image if project is an art piece
        <div key={project.id}>
          <Suspense fallback={<ImageFallback />}>
            <Image
              src={project.website}
              alt={project.name + " image"}
              height={500}
              width={500}
              className="mx-auto py-2"
            />
          </Suspense>

          <p className="font-bold py-2">{project.name}</p>
          <p>{project.technologies}</p>
          <div className="py-2">
            <a
              href={project.website}
              rel="noopener noreferrer"
              target="_blank"
              className="font-bold text-purple-500 hover:text-pink-400 focus:text-pink-400 focus:outline-none"
            >
              View Full Image
            </a>
          </div>
        </div>
      )}
    </div>
  ));
};

function ImageFallback() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  return (
    // skeleton loader for project images
    <div className="relative w-full h-full">
      {!imageLoaded && (
        <div className="animate-pulse bg-gray-200 rounded-lg w-full h-full"></div>
      )}
      <img
        height={500}
        width={500}
        className={`absolute top-0 left-0 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500 ease-in-out`}
        onLoad={handleImageLoaded}
      />
    </div>
  );
}
