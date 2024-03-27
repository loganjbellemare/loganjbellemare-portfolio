import NavBar from "../components/NavBar";
import ResumeView from "./Resume";

export default function Resume() {
  return (
    <main className=" bg-theme-image bg-cover bg-no-repeat h-full w-full">
      <NavBar />
      <ResumeView />
    </main>
  );
}
