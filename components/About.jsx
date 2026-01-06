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
          <p className="py-2 text-gray-600 dark:text-gray-300">
            I&#39;m a full-stack software engineer with experience owning and
            shipping production web and mobile products end-to-end. I have a
            strong background in React, Next.js, Firebase, and Web3 systems,
            with hands-on experience building transaction-critical features,
            supporting live users, and managing releases across web, mobile,
            and browser extensions.
          </p>
          <p className="py-2 text-gray-600 dark:text-gray-300">
            Currently, I&#39;m working at Tokeo where I own end-to-end Android
            development for a production multi-chain crypto wallet. I&#39;ve
            built transaction builders for Cardano, Bitcoin, and Sui, developed
            a multi-tab mobile DApp browser, and shipped releases across Google
            Play Store, Apple App Store, and Chrome Web Store. I thrive on
            solving complex problems and delivering scalable, user-facing
            solutions.
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
