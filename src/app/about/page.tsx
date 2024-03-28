import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import AboutView from "./About";

export default function About() {
  return (
    <main className="bg-theme-image bg-repeat">
      <NavBar />
      <AboutView />
      <Footer />
    </main>
  );
}
