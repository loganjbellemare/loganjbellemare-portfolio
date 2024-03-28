import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ResumeView from "./Resume";

export default function Resume() {
  return (
    <main className=" bg-theme-image bg-repeat">
      <NavBar />
      <ResumeView />
      <Footer />
    </main>
  );
}
