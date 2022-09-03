import Image from "next/image";
import React from "react";
import mbuyuImg from "../../public/assets/projects/mbuyu.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const mbuyu = () => {
  return (
    <div>
    <Head>
    <title>Chase | MBUYU Digital Archive</title>
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
          src={mbuyuImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">MBUYU</h2>
          <h3>React JS / MaterialUI / Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This appplication is being built for the government of Burundi to
            provide archivists ability to upload, view, and edit images of paper
            records. It was built using ReactJS, styled with MaterialUi, and is
            hosted using Netlify. By implementing Firebase cloud functions and
            using Hooks to facilitate state management, this app stores uploaded
            document info in firebase firestore and a record of uploaded images
            in firebase storage Contains user authentication with Firebase
            functions to ensure user specific data access and CRUD privileges.
          </p>

            <button className="px-8 py-2 mt-4 mr-8 disabled:opacity-25" disabled>Demo</button>

            <button className="px-8 py-2 mt-4 disabled:opacity-25" disabled>Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ReactJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MaterialUI
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase Auth
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase Storage 
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase Firestore
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

export default mbuyu;
