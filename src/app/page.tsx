import Image from "next/image";
import NavBar from "./components/NavBar";
import { useState } from "react";

export default function Home() {
  return (
    <main>
      <NavBar />
      <h1>hello world</h1>
    </main>
  );
}
