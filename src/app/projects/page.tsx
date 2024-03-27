"use client";
import NavBar from "../components/NavBar";
import ProjectsView from "./Projects";

export default function Projects() {
  return (
    <main className="bg-theme-image bg-repeat h-full w-full">
      <NavBar />
      <ProjectsView />
    </main>
  );
}
