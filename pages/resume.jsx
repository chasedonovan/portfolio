import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Chase | Resume</title>
        <meta
          name="description"
          content="I’m a full-stack web developer specializing in building exceptional digital experiences."
        />
        <link rel="icon" href="assets/navLogo.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center dark:bg-slate-400">
          <h2 className="text-center">Chase Donovan</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/chase-donovan-264670210/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/chasedonovan"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Proven Leadership <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <div className="py-2 flex flex-row flex-wrap">
            <span className="font-bold">FrontEnd </span>
            <span className="px-2">|</span>HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>ReactJS
            <span className="px-2">|</span>NextJS
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span>AntDesign
            <span className="px-2">|</span>MaterielUI
            <span className="px-2">|</span>Yup
            <span className="px-2">|</span>Jest
            <span className="px-2">|</span>Cypress
            <span className="px-2">|</span>Figma
          </div>

          <div className="py-2 flex flex-row flex-wrap">
            <span className="font-bold">BackEnd</span>
            <span className="px-2">|</span>Node.js
            <span className="px-2">|</span>Express
            <span className="px-2">|</span>PostgreSQL
            <span className="px-2">|</span>Vercel
            <span className="px-2">|</span>Firebase
            <span className="px-2">|</span>AWS
            <span className="px-2">|</span>Heroku
            <span className="px-2">|</span>Netlify
          </div>
          <p className="py-2 flex flex-row flex-wrap">
            <span className="font-bold">Additional</span>
            <span className="px-2">|</span>GitHub
            <span className="px-2">|</span>Docker
            <span className="px-2">|</span>Jira
            <span className="px-2">|</span>Trello
            <span className="px-2">|</span>Agile Project Management
            <span className="px-2">|</span>Architecture
            <span className="px-2">|</span>Debugging
            <span className="px-2">|</span>Deployment
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Accudata</span>
            <span className="px-2">|</span>Las Vegas, NV
          </p>
          <p className="py-1 italic">
            Office Associate / Web Development Consultant & Engineer (2019 -
            Current)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Advising on website optimization, and creation of digital
              solutions for order processing, management, and querying
            </li>
            <li>
              Increase productivity and decreased spending by transitioning from
              manual to mechanical envelope stuffing
            </li>
            <li>
              Maintain incoming business calls, service order verification,
              filing, and processing while also managing inventory
            </li>
            <li>
              Built a web app using React and Firebase to streamline
              approximately 200+ document preparation requests per week
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Aries Design</span>
            <span className="px-2">|</span>Las Vegas, NV
          </p>
          <p className="py-1 italic">Laborer (2020 - 2021)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Provided customized framing, interior stucco, and general
              residential construction services within established deadlines
            </li>
            <li>
              Contributed to home building structural projects with precision
              using various instruments, equipment, and power tools
            </li>
            <li>
              Proved to be able to learn quickly and be resourceful when
              tackling a new occupational task or obstacle
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Regal, Colonnade 14</span>
            <span className="px-2">|</span>Las Vegas, NV
          </p>
          <p className="py-1 italic">Team Member (2016 – 2018)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Handled ticket sales and $5,000+ in daily transactions while
              maintaining till balance and inventory items
            </li>
            <li>
              Leveraged promotional opportunities, implemented product upselling
              techniques, and increased sales by 10%
            </li>
            <li>
              Provided new hire training, mentored on till balance best
              practices, food/health standards, and customer service
            </li>
          </ul>
        </div>

        <h5 className="text-center underline text-[18px] py-4">Education</h5>
        {/* Experience */}
        <div className="py-4">
          <p className="italic">
            <span className="font-bold italic">BloomTech (fka Lambda)</span>
            {/* <span className="px-2">|</span> */}
          </p>
          <p className="italic text-right">
            Graduate, Part Time Program, Full Stack Web Development (2021 -
            2022)
          </p>
        </div>

        <div className="py-4">
          <p className="italic ">
            <span className="font-bold italic">Rancho High School</span>
            {/* <span className="px-2">|</span> */}
          </p>
          <p className="italic text-right">
            Graduate, 3.8 GPA, Honors Diploma, Medical Magnet Medallion (2015 -
            2019)
          </p>
        </div>
      </div>
    </>
  );
};

export default resume;
