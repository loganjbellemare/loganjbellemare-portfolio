import NavBar from "./components/NavBar";
import HomePage from "./components/home-page/HomePage";

export default function Home() {
  return (
    <main className=" bg-midnightPurple h-full w-full">
      <NavBar />
      <HomePage />
      <h1>hello world</h1>
    </main>
  );
}
