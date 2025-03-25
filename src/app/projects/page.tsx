"use client";
import { Suspense } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProjectsView from "./Projects";

export default function Projects() {
  return (
    <main>
      <Suspense>
        <NavBar />
        <ProjectsView />
        <Footer />
      </Suspense>
    </main>
  );
}
