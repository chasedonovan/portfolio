import Image from "next/image";
import React from "react";
import mintImg from "../../public/assets/projects/mint.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const mint = () => {
  return (
    <div>
    <Head>
    <title>Chase | The Morphium Minting</title>
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
          src={mintImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">The Morphium Minting</h2>
          <h3>NextJS / Tailwind / MeshJS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app was built using NextJS and frontend is hosted on Vercel.
            Projects can setup mint drops and direct their users to a dynamic page via a unique link.
            Users are able to mint NFTs with ADA or other Cardano native tokens with a single signature from their web3 wallet.
            This app displays a countdown with links to save the date via google drive or ics if drop is not live yet.
            The ability for whitelist mints is also fully functional.
            Integrated recaptcha to prevent bots from minting.
          </p>
          {/* <a
            href="https://github.com/water-my-plantz"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a> */}
          <a
            href="https://dapp.themorphium.io/mint/cb_harvest_two"
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
                <RiRadioButtonFill className="pr-1" /> Vercel
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-gray-300">
                <RiRadioButtonFill className="pr-1" /> MeshJS
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

export default mint;
