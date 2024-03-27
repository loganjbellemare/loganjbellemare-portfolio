import NavBar from "./components/NavBar";
import HomePage from "./components/home-page/HomePage";

export default function Home() {
  return (
    <main className=" bg-theme-image bg-cover bg-no-repeat h-full w-full">
      <NavBar />
      <HomePage />
    </main>
  );
}
