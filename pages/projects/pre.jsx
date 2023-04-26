import Image from "next/image";
import Head from "next/head";
import React from "react";
import preImg from "../../public/assets/projects/3d.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const pre = () => {
  return (
    <div>
      <Head>
        <title>Chase | PRE.world </title>
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
            src={preImg}
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">PRE.world</h2>
            <h3>NextJS / OpenAI API / Tailwind</h3>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <p>
              Pre.world is a unique project that allows individuals to create
              their own 2D and 3D websites/spaces using their own content. The
              platform utilizes OpenAI API to generate website content based on
              a simple sentence summary, making website building accessible to
              anyone regardless of their technical skills. Pre.world is a
              non-profit organization that supports Mbuyu, another non-profit
              organization dedicated to digitizing national records in Burundi
              to preserve the country it's people's history. Overall, pre.world is a
              powerful tool for empowering individuals and organizations to
              create immersive and engaging websites while contributing to a
              meaningful cause.
            </p>
            {/* <a href="https://pre.world/" target="_blank" rel="noreferrer">
              <button className="px-8 py-2 mt-4 mr-8">Code</button>
            </a> */}
            <a href="https://pre.world/" target="_blank" rel="noreferrer">
              <button className="px-8 py-2 mt-4">Demo</button>
            </a>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 dark:shadow-indigo-500/50">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1 ">
                <p className="text-gray-600 py-2 flex items-center dark:text-gray-300">
                  <RiRadioButtonFill className="pr-1" /> NextJS
                </p>
                <p className="text-gray-600 py-2 flex items-center dark:text-gray-300">
                  <RiRadioButtonFill className="pr-1" /> OpenAI API
                </p>
                <p className="text-gray-600 py-2 flex items-center dark:text-gray-300">
                  <RiRadioButtonFill className="pr-1" /> Tailwind CSS
                </p>
                <p className="text-gray-600 py-2 flex items-center dark:text-gray-300">
                  <RiRadioButtonFill className="pr-1" /> Vercel
                </p>
                <p className="text-gray-600 py-2 flex items-center dark:text-gray-300">
                  <RiRadioButtonFill className="pr-1" /> 3D spaces
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

export default pre;
