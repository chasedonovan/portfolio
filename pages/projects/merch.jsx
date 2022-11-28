import Image from "next/image";
import React from "react";
import merchImg from "../../public/assets/projects/merch.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const merch = () => {
  return (
    <div>
      <Head>
        <title>Chase | GoatTribe Merch Store</title>
        <meta
          name="description"
          content="I’m a full-stack web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="../../public/assets/navLogo.png" />
      </Head>
      <div className="w-full">
        <div className="w-screen h-[50vh] relative">
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={merchImg}
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">GoatTribe Merch Store</h2>
            <h3>NextJS / Tailwind / dcSpark / nowPayments / sendGrid </h3>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <p>
              I designed, built, and deployed this app for a NFT Project called
              GoatTribe using NextJs, Tailwind, and Vercel. Using dcSpark
              Multi-Platform Library I constructed a wallet connector that, with
              a fetch to an API, us able to connect to the user's wallet and
              check if they have a 'GoatTribe' NFT. If they do, they are able to
              enter the store. If they do not, they get link to a NFT
              marketplace and a friendly message saying they need to buy a
              GoatTribe NFT. I handled all of the design and development for
              this project, including logic that that allows users to add, edit,
              and remove items from their cart. I also handled inventory status
              for items and the logic that notifies users if the item is in low
              or no stock. I implemented a shipping info checkout form using
              MaterialUI components, and react-hook-form to handle validation. I
              also implemented a multi-crypto payment system using nowPayments
              and sendGrid to send a receipt to the user's email. I currently
              maintain this deployment and work with the team to implement any
              requested features.
            </p>
            <button
              className="px-8 py-2 mt-4 mr-8 disabled:opacity-25"
              disabled
            >
              Code
            </button>
            <a href="https://merch.uniscroll.io/" target="_blank" rel="noreferrer">
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
                  <RiRadioButtonFill className="pr-1" /> cardano-multiplatform-lib
                </p>
                <p className="text-gray-600 py-2 flex items-center dark:text-gray-300">
                  <RiRadioButtonFill className="pr-1" /> nowPayments
                </p>
                <p className="text-gray-600 py-2 flex items-center dark:text-gray-300">
                  <RiRadioButtonFill className="pr-1" /> sendGrid
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

export default merch;
