import React from "react";
import Container from "../components/Container";
import classNames from "../utils/classNames";

export default function ResumeView() {
  return (
    <Container className={classNames("mt-1 md:mt-0 p-4 text-[80%]")}>
      <div className="mb-3 md:w-[80%] mx-auto py-[8px] sm:w-full">
        <h2 className="font-bold text-[1.5em] my-[.83em]">My Resume</h2>
        <Button />
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vRzca7nQ9Vxx_YRe8Jl46JSJE0fbpRLbCjTp3ZX79MCXgThLuhe8-ILuY2kVPzype-8Ve3iiVbTpWci/pub?embedded=true"
          height={1000}
          width={1000}
          className="md:mx-auto sm:mx-0 w-full my-[.83em] px-0"
        ></iframe>
        <Button />
      </div>
    </Container>
  );
}

function Button() {
  return (
    <a
      href="https://drive.google.com/file/d/1xShQkuvwK4YuUctwSqta_Fq1P2wkZZ7E/view?usp=sharing"
      target="_blank"
      className="rounded border-purple-500 bg-purple-500 px-3 py-2 mx-[45%] hover:bg-pink-400 focus:outline-none focus:bg-pink-400 text-white"
    >
      <button className="my-2">DOWNLOAD</button>
    </a>
  );
}
