"use client";
import React, { useState, useEffect } from "react";
import Container from "../Container";
import classNames from "@/app/utils/classNames";
import Image from "next/image";
import ContactBox from "./ContactBox";
import UrlBox from "./UrlBox";
import InterestsBox from "./InterestsBox";
import ProjectsBox from "./ProjectsBox";
import BlurbsBox from "./BlurbsBox";
import FriendsBox from "./FriendsBox";
import CommentsBox from "./CommentsBox";
type Props = {};

export default function HomePage(props: Props) {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/apps/get");
      const data = await response.json();
      setProjects([...data.data]);
    };

    fetchData();
  }, []);

  return (
    <Container className={classNames("mt-1 md:table p-4 md:mt-0")}>
      {/** left side of profile view */}
      <div className="md:w-[40%] sm:block md:table-cell left-0 mx-2">
        <h3>
          <b>Logan Bellemare</b>
        </h3>
        <div className="lg:flex">
          {/** pfp */}
          <Image
            width={200}
            height={200}
            src="https://iili.io/JGr23Dx.jpg"
            alt="Logan's profile picture"
            className=" h-full w-full max-w-[240px] max-h-[240px] aspect-square mt-3"
          />
          <div className="text-[80%] w-full pl-2">
            {/** tagline and last active */}
            <p className="pt-2">
              "In this world, the most fearsome one is a mediocre man who has
              nothing else" -Sigma,
              <br />
              <i>文豪ストレイドッグス(Bungou Stray Dogs)</i>
              <br />
              <b>Asagiri Kafka</b>
            </p>
            <p className="py-3">
              Last Active:
              <br /> 666 seconds ago
            </p>
          </div>
        </div>
        <div className="text-[80%] py-2">
          {/** mood and links to projects */}
          <p>
            <b>Mood:</b> 眠い zzzzz 😴
          </p>
          <p className="py-2">
            <b>View my:</b>{" "}
            <a
              href="/projects?type=app"
              className="hover:text-pink-400 text-purple-500 focus:outline-none focus:text-pink-400 cursor-pointer"
            >
              <b>Apps</b>
            </a>
            {" | "}
            <a
              href="/projects?type=art"
              className="hover:text-pink-400 text-purple-500 focus:outline-none
            focus:text-pink-400 cursor-pointer"
            >
              <b>Art</b>
            </a>
          </p>
        </div>
        <ContactBox />
        <div className="my-3">
          <UrlBox />
        </div>
        <InterestsBox />
      </div>
      {/** right side of profile view */}
      <div className="md:w-[60%] md:table-cell right-0 sm:block mx-1 my-3 py-2">
        <ProjectsBox projects={projects} />
        <BlurbsBox />
        <FriendsBox />
        <CommentsBox />
      </div>
    </Container>
  );
}
