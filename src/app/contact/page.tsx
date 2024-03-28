import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ContactView from "./Contact";

export default function Contact() {
  return (
    <main className=" bg-theme-image bg-repeat h-[100vh]">
      <NavBar />
      <ContactView />
      <Footer />
    </main>
  );
}
