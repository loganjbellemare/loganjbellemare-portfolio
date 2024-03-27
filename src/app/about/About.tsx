"use client";
import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import classNames from "../utils/classNames";
import Image from "next/image";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

type Asset = {
  id: string;
  name: string;
  type: string;
  src: string;
  createdAt: string;
  updatedAt: string;
};

interface MapImagesProps {
  images: Asset[];
}

interface MaptBlinkiesProps {
  blinkies: Asset[];
}

export default function AboutView() {
  const [images, setImages] = useState<any[]>([]);
  const [blinkies, setBlinkies] = useState<any[]>([]);

  useEffect(() => {
    //fetch full images to display in main photo grid
    const fetchImages = async () => {
      const response = await fetch("/api/assets/get/images");
      const data = await response.json();
      setImages([...data.data]);
    };

    //fetch blinkies for my self indulgent blinky grid c:
    const fetchBlinkies = async () => {
      const response = await fetch("/api/assets/get/blinkies");
      const data = await response.json();
      setBlinkies([...data.data]);
    };

    fetchImages();
    fetchBlinkies();
  }, []);

  return (
    <Container className={classNames("mt-1 md:mt-0 md:table p-4 text-[80%]")}>
      {/** left side */}
      <div className="sm:block md:table-cell mr-2 md:w-[30%]">
        {/** title */}
        <h2 className="my-2 text-md text-center font-bold text-purple-500">
          I want to be the very best, like no one ever was...
        </h2>
        {/** about text */}
        <p className="mb-2">Or at least better than I was yesterday.</p>
        <p className="mb-2">
          I'm Logan, but you probably knew that already, I'm a transmasc creator
          originally from California, currently residing in Jacksonville,
          Florida. My biggest passion in life is creating, whether that's making
          websites, art, clothing, or food.
        </p>
        <p className="mb-2">
          For as long as I can remember, I've been creating. My dad is also an
          artist, and was my biggest inspiration from a very young age. Once I
          was introduced to cartoons, videogames and, specifically anime, it
          really fueled my passion to create cool characters. To this day anime
          and manga are probably my biggest inspirations for my own art and
          overall personal aesthetic. Old tech also has a special place in my
          heart, being a early 00s kid, technology has been a huge thing my
          whole life. I've been chronically online since I had access to a smart
          phone or laptop, but I had no idea how any of it really worked. Seeing
          as how digital content is the most popular type of content now, I
          wanted to learn how to create things like websites and applications. I
          had some exposure to HTML/CSS through adding custom styles to my
          Tumblr blog, but nothing beyond that, and even that understanding was
          minimal.
        </p>
        <p className="mb-2">
          I decided to start teaching myself how to code after a few years of
          trying to find a career I truly enjoyed, just to try it out out of a
          couple different things. A good friend of mine recommended I start
          learning, actually, as he was also into coding and we have a lot of
          similar interests. I started learning some basic JavaScript/HTML/CSS
          on FreeCodeCamp, and didn't need to try any of the other options I had
          lined up. I quickly developed a passion for coding, as it's a great
          creative outlet for me, and I've always enjoyed figuring out how
          things work and solving complicated problems. So everything just kind
          of worked out in that regard. After getting a good understanding of
          web development basics, I decided to look into furthering my education
          through different Bootcamp programs. I decided on Thinkful's
          Full-stack Web Development program, which is to this day one of my
          biggest achievements. It was a really rewarding experience, as I
          learned how to build full-stack web applications from concept to
          completion, as well as a foundational knowledge for my continued
          learning on any technologies I'm interested in.
        </p>
        {/** dev technologies list */}
        <div className="mb-2">
          <b className="text-purple-500">My Favorite Technologies</b>
          <div className="flex mt-1 gap-1">
            <IoLogoJavascript
              className="w-[50px] h-[50px] text-yellow-300"
              title="JavaScript"
            />
            <FaHtml5
              className="w-[50px] h-[50px] text-orange-500"
              title="HTML5"
            />
            <FaReact
              className="w-[50px] h-[50px] text-cyan-400"
              title="React"
            />
            <FaCss3Alt
              className="w-[50px] h-[50px] text-blue-500"
              title="CSS3"
            />
            <FaNodeJs
              className="w-[50px] h-[50px] text-lime-400"
              title="Node.js"
            />
            <BiLogoPostgresql
              className="w-[50px] h-[50px] text-blue-400"
              title="PostgreSQL"
            />
            <SiMongodb
              className="w-[50px] h-[50px] text-green-400"
              title="MongoDB"
            />
            <SiVercel className="w-[50px] h-[50px]" title="Vercel" />
            <TbBrandNextjs className="w-[50px] h-[50px]" title="Next.js" />
          </div>
        </div>
        {/** other about text */}
        <p className="mb-2 mt-3">
          Outside of my professional life, I enjoy gaming with my friends,
          making things, and hanging out with my dog, SunRay. I'm a huge nerd at
          heart, I love everything high-fantasy and horror. Dungeons and
          Dragons, Magic the Gathering, Pokemon, Pan's Labyrinth, Studio Ghibli,
          anime/manga in general, roguelikes, teambuilders, auto-battlers,
          (tt)(j)rps, anything with cool creature/character design and
          interesting combat mechanics.
        </p>
        <ul className="list-decimal list-inside mb-2">
          <p className="text-purple-500">
            My biggest personal achivements include:
          </p>
          <li>100% completing Pokemon:Legends Arceus (this took 96+ hours)</li>
          <li>
            Winning a game of Magic by summoning 536 Scute Swarms in a single
            turn (<s>bug</s>, I mean big brain)
          </li>
        </ul>
      </div>
      {/** right side */}
      <div className="sm:block md:table-cell sm:px-0 md:p-[7px] md:w-[60%]">
        <div>
          <p className="md:p-2">
            I like to imagine a world where everyone lives together without
            conflict or bias, and where technology is fully integrated into
            human life. A world where the advancements of technology truly make
            people's lives easier, people only need to work when they want,
            basic needs are always met, and we have no need for monetary
            systems. Everyone can pay each other for goods/services with
            goods/services, and there are no barriers to learning a skill or
            trade. I know we're a long way off, but I would like to do all I can
            to contribute to this future, if you have a similar mindset,{" "}
            <a
              href="mailto:loganbellemare444@gmail.com?subject=I%20want%20to%20change%20the%20world"
              rel="noopener noreferrer"
              className="text-purple-500 hover:text-pink-400 focus:text-pink-400 focus:outline-none"
            >
              message me!
            </a>
          </p>
        </div>
        {/** image grid */}
        <div className="md:px-2 mb-3">
          <h4 className="font-bold text-purple-500">
            Some of my favorite images
          </h4>
          <div className="flex-row justify-center content-center">
            <MapImages images={images} />
          </div>
        </div>
        {/** blinkies because I literally can't help myself, I'm having fun */}
        <div className="md:px-2 my-1">
          <h4 className="font-bold text-purple-500">
            And some blinkies because... I can't resist
          </h4>
          <div className="flex-row justify-center content-center">
            <MapBlinkies blinkies={blinkies} />
          </div>
        </div>
      </div>
    </Container>
  );
}

function MapImages({ images }: MapImagesProps) {
  if (!images.length) {
    return null;
  }

  return images.map((image: Asset) => (
    <div className="inline-block w-[105px] p-0 m-0">
      <Image
        src={image.src}
        alt={image.name}
        key={image.id}
        width={100}
        height={100}
        title={image.name}
      />
    </div>
  ));
}

function MapBlinkies({ blinkies }: MaptBlinkiesProps) {
  if (!blinkies.length) {
    return null;
  }

  return blinkies.map((blinkie: Asset) => (
    <div className="inline-block w-[105px]">
      <Image
        src={blinkie.src}
        alt={blinkie.name}
        key={blinkie.id}
        width={100}
        height={100}
        title={blinkie.name}
        className="h-[13.3px]"
      />
    </div>
  ));
}
