import NavBar from "./components/NavBar";
import HomePage from "./components/home-page/HomePage";
import "../../public/Bg-image.png";

export default function Home() {
  return (
    <main className=" bg-[url('../../public/Bg-image.png')] bg-cover bg-no-repeat h-full w-full">
      <NavBar />
      <HomePage />
    </main>
  );
}
