import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomePage from "./components/home-page/HomePage";

export default function Home() {
  return (
    <main className=" bg-theme-image bg-repeat">
      <NavBar />
      <HomePage />
      <Footer />
    </main>
  );
}
