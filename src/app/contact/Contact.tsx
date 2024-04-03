"use client";
import React from "react";
import Container from "../components/Container";
import classNames from "../utils/classNames";
import Image from "next/image";

export default async function ContactView() {
  //web3forms handleSubmit
  async function handleSubmit(event: any) {
    event.preventDefault();
    let formData = new FormData(event.target);

    formData.append("access_key", "113916d2-373a-4c42-87e4-a12c4f2cfa9e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    console.log(response);
    if (result.success) {
      window.confirm(
        "message sent successfully. I'll get back to you as soon as possible"
      );
      event.target.reset();
    } else {
      window.confirm("something went wrong, please try again!");
    }
  }

  return (
    <Container className={classNames("mt-1 md:mt-0 p-4 text-[80%]")}>
      <div className="mb-3 w-[80%] mx-auto py-[40px]">
        <div className="mx-auto mb-4 md:w-[600px] sm:w-full p-[5px] bg-pink-400">
          {/** logo display */}
          <Image
            src="https://iili.io/JG2tm3Q.png"
            alt="logo"
            width={300}
            height={300}
            className="mx-auto"
          />
        </div>
        <div className="md:w-[600px] sm:w-full mx-auto px-[5px] py-[15px] border border-purple-500 text-center gap-2 justify-between content-center whitespace-nowrap">
          {/** page header */}
          <h4 className="font-bold text-purple-500 mb-2">Contact Me</h4>
          {/** contact form */}
          <form
            className="md:flex flex-col sm:block"
            name="contact"
            id="contact-form"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="flex content-center justify-between gap-2 my-2 mx-4">
              <label htmlFor="name">Full Name: </label>
              <input
                required
                type="text"
                name="name"
                id="name"
                className="w-[75%] p-[2px] border border-purple-300 focus:outline-pink-400 active:outline-pink-400 hover:border-pink-400 valid:border-lime-400"
              ></input>
            </div>
            <div className="flex justify-between content-center gap-2 my-2 mx-4">
              <label htmlFor="phone-number">Phone Number: </label>
              <input
                required
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                type="text"
                name="phone-number"
                id="phone-number"
                className="w-[75%] p-[2px] border border-purple-300 focus:outline-pink-400 active:outline-pink-400 hover:border-pink-400 valid:border-lime-400"
              ></input>
            </div>
            <div className="flex justify-between content-center gap-2 my-2 mx-4">
              <label htmlFor="email">Email: </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                className="w-[75%] p-[2px] border border-purple-300 active:outline-pink-400 focus:outline-pink-400 hover:border-pink-400 valid:border-lime-400"
              ></input>
            </div>
            <div className="flex justify-between content-center gap-2 my-2 mx-4">
              <label htmlFor="subject">Subject: </label>
              <input
                required
                type="text"
                name="subject"
                id="subject"
                className="w-[75%] p-[2px] border border-purple-300 focus:outline-pink-400 active:outline-pink-400 hover:border-pink-400 valid:border-lime-400"
              ></input>
            </div>
            <div className="flex justify-between content-center gap-2 my-2 mx-4">
              <label htmlFor="message">Message: </label>
              <textarea
                required
                name="message"
                id="message"
                className="w-[75%] p-[2px] border border-purple-300 h-[200px] focus:outline-pink-400 active:outline-pink-400 valid:border-lime-400 hover:border-pink-400"
              />
            </div>
            <div>
              <button
                type="submit"
                className="p-2 font-bold rounded bg-purple-500 text-white hover:bg-pink-400 focus:outline-none focus:bg-pink-400 active:bg-lime-400 visited:bg-sky-400"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}
