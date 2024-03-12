import React from "react";
import Container from "../components/Container";
import classNames from "../utils/classNames";

type Props = {};

export default function AboutView() {
  return (
    <Container className={classNames("mt-1 md:mt-0 md:table p-4 text-[80%]")}>
      <div className="sm:block md:table-cell mr-2 md:w-[30%]">
        {/** title */}
        <h2 className="my-2 text-md text-center font-bold">
          I want to be the very best, like no one ever was...
        </h2>
        {/** about text */}
        <p className="mb-2">Or at least better than I was yesterday.</p>
        <p className="mb-2">
          I'm Logan, but you probably knew that already, I'm a transmasc creator
          originally from California. My biggest passion in life is creating,
          whether that's making websites, art, clothing, or food.
        </p>
        <p className="mb-2">
          From a very young age, I was pushed to make the most of my ability to
          learn and adapt quickly, taking part of my high school's Early College
          Program, I completed my last 2 years of high school as a full-time
          college student and graduated with both my Associates degree and my
          diploma. After graduating, I pursued a career in restaurant work,
          seeing as I love to create and food is one of the few things that
          brings everyone together. I was promoted to my first management
          position within a year of being hired, where I lead a wonderful team
          of delivery drivers and instore staff and helped the store gain
          corporate's 'Million Dollar Store' award in 2017. A few years pass,
          and I decide I want to make a career switch as part of my
          self-betterment journey. I took up coding as a hobby when a good
          friend of mine suggested to try it out. I started out on FreeCodeCamp,
          just learning the basics of web development (HTML, CSS, JavaScript),
          and ended up really enjoying it. I decided I want to pursue web
          development as a career opportunity, and enrolled in a bootcamp to
          gain comprehensive knowledge of full-stack web development. It was by
          far the hardest thing I have ever done, but I stuck it out and gained
          a Certification in Software Engineering. I am currently looking for
          exciting opportunities in web development, please feel free to message
          me if you have a project you think I'd be a good fit for!
        </p>
        <p className="mb-2">
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
      <div className="sm:block md:table-cell sm:px-0 md:p-[7px] md:w-[60%]">
        {/** image grid */}
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
      </div>
    </Container>
  );
}
