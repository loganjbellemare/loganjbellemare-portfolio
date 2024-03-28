"use client";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProjectsView from "./Projects";

export default function Projects() {
  return (
    <main className="bg-theme-image bg-repeat">
      <NavBar />
      <ProjectsView />
      <Footer />
    </main>
  );
}
