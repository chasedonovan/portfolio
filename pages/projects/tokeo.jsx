import Image from "next/image";
import Head from "next/head";
import React from "react";
import tokeoImg from "../../public/assets/projects/tokeo.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const tokeo = () => {
  return (
    <div>
      <Head>
        <title>Chase | Tokeo Wallet</title>
        <meta
          name="description"
          content="Full-stack developer for Tokeo, a multi-chain crypto wallet with mobile apps and browser extension."
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
            src={tokeoImg}
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Tokeo Wallet</h2>
            <h3>Kotlin / Swift / TypeScript / Firebase</h3>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <p>
              Tokeo is a production multi-chain crypto wallet supporting
              Cardano, Bitcoin, and Sui blockchains. As a full-stack developer,
              I work across the entire stack: Android development using Kotlin
              and Jetpack Compose, iOS development using Swift and SwiftUI, and
              a Chrome extension built with TypeScript and Plasmo. I built
              transaction builders for multiple chains including signing,
              validation, and UX flows, and developed a multi-tab mobile DApp
              browser supporting deep-link and Web3 workflows. On the server
              side, I develop Firebase Cloud Functions with Typescript, Kotlin cloud functions,
              and Next.js APIs supporting wallet features, transactions, and
              platform services. I led production debugging and incident
              response using a custom built in-app support system, and owned
              releases across Google Play Store, Apple App Store, and Chrome Web
              Store.
            </p>
            {/* Add demo/code links when available */}
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 dark:shadow-indigo-500/50">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1 ">
                <p className="text-gray-600 py-2 flex items-center dark:text-gray-300">
                  <RiRadioButtonFill className="pr-1" /> Kotlin / Jetpack Compose
                </p>
                <p className="text-gray-600 py-2 flex items-center dark:text-gray-300">
                  <RiRadioButtonFill className="pr-1" /> Swift / SwiftUI
                </p>
                <p className="text-gray-600 py-2 flex items-center dark:text-gray-300">
                  <RiRadioButtonFill className="pr-1" /> TypeScript / Plasmo
                </p>
                <p className="text-gray-600 py-2 flex items-center dark:text-gray-300">
                  <RiRadioButtonFill className="pr-1" /> Firebase / Cloud Functions
                </p>
                <p className="text-gray-600 py-2 flex items-center dark:text-gray-300">
                  <RiRadioButtonFill className="pr-1" /> Next.js APIs
                </p>
                <p className="text-gray-600 py-2 flex items-center dark:text-gray-300">
                  <RiRadioButtonFill className="pr-1" /> Web3 / DApp Browser
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

export default tokeo;
