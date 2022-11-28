import Image from "next/image";
import React from "react";
import theriverImg from "../../public/assets/projects/theriver.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const theriver = () => {
  return (
    <div>
    <Head>
    <title>Chase | The River</title>
    <meta name="description" content="I’m a full-stack web developer specializing in building (and occasionally designing) exceptional digital experiences." />
    <link rel="icon" href="../../public/assets/navLogo.png" />
    </Head>
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={theriverImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">The River</h2>
          <h3>NextJS / Tailwind / Mesh</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            While working with the team's designer, I built, deployed, and maintain this landing page for The River,
            an online casino built on the 
            cardano blockchain, using NextJS, Tailwind, and Vercel. It is fully responsive and features a
            a slot machine that, on click, lets users check their wallet 
            to see if they are on a whitelist. If they are, the slot machine will spin and land on 3 toads 
            then proceed to show a winning screen that allows users to claim a NFT. I integrated
            web3 wallet connector using Mesh to allow users to easily connect their wallet to the app and mint the 
            digital asset. For user's who are not on the whitelist, using a random number generator and additional logic,
            the slot machine returns 3 seemingly random slots that are never all the same, to give the user the impression
            that they are playing a slot machine. After the loser slot sequence, the user is shown a losing screen that
            shows a call to action with a link to social media. All wallet interactions have proper error handling.
            The Vercel deployment has web vital and audience tracking to allow me to see how users are interacting with the app
            and the quality of those interactions.
          </p>
          <button className="px-8 py-2 mt-4 mr-8 disabled:opacity-25" disabled>
            Code
          </button>
          <a
            href="https://cardanoriver.io/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 dark:shadow-indigo-500/50">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center dark:text-gray-300">
                <RiRadioButtonFill className="pr-1" /> NextJS
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-gray-300">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-gray-300">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-gray-300">
                <RiRadioButtonFill className="pr-1" /> Mesh
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-gray-300">
                <RiRadioButtonFill className="pr-1" /> Vercel
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default theriver;
