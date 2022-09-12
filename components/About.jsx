import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600 dark:text-gray-300">
            / / I&#39;m not your average developer
          </p>
          <p className="py-2 text-gray-60 dark:text-gray-300">
            For the past 2 years I&#39;ve been learning and developing with
            React, Node.js, Firebase, and many other libraries and tools used in web
            development. At my current place of employment, Accudata, I am
            working on a digital solution to optimize the order processing and
            management system. I have a solid reputation as an analytical
            problem solver and a solid team contributor. I&#39;m a reliable
            worker who is highly observant, motivated, and analytical
          </p>
          <p className="py-2 text-gray-600 dark:text-gray-300">
            I started learning web development to solve efficiency issues for my
            employer, and to learn an employable skill. After getting deeper
            into the journey of a developer, I became even more enthused with
            finding problems to solve with code. I am now spending my time
            building projects with ReactJS, Node.js, and Firebase, as well as
            learning new technologies (like this app, which I built using NextJS
            for the first time).
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer dark:text-gray-300">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 dark:shadow-indigo-500">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
