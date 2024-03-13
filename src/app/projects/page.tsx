"use client";
import NavBar from "../components/NavBar";
import ProjectsView from "./Projects";

export default function Projects() {
  return (
    <main className="bg-midnightPurple h-full w-full">
      <NavBar />
      <ProjectsView />
    </main>
  );
}
