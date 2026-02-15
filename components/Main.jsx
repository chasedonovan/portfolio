import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div
      id='home'
      className='relative w-full h-screen text-center overflow-hidden'
    >
      {/* Subtle gradient + mesh background */}
      <div
        className='absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(86,81,229,0.15),transparent)] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.2),transparent)]'
        aria-hidden
      />
      <div
        className='absolute inset-0 opacity-[0.02] dark:opacity-[0.04]'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235651e5' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />
      <div className='relative max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div className='animate-fade-in'>
          <p className='uppercase text-sm tracking-widest text-gray-600 dark:text-gray-200'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700 dark:text-gray-300'>
            Hi, I&#39;m <span className='text-[#5651e5]'> Chase</span>
          </h1>
          <h1 className='py-2 text-gray-700 dark:text-gray-300'>A Full-Stack Software Engineer</h1>
          <p className='py-4 text-gray-600 dark:text-gray-200 sm:max-w-[70%] m-auto'>
            I build and ship production web and mobile applications end-to-end,
            with experience in React, Next.js, Firebase, and Web3 systems.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/chase-donovan-264670210/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-soft dark:shadow-soft-dark p-6 cursor-pointer hover:scale-110 ease-in duration-300 border border-gray-200/50 dark:border-slate-600/50'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/chasedonovan'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-soft dark:shadow-soft-dark p-6 cursor-pointer hover:scale-110 ease-in duration-300 border border-gray-200/50 dark:border-slate-600/50'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-soft dark:shadow-soft-dark p-6 cursor-pointer hover:scale-110 ease-in duration-300 border border-gray-200/50 dark:border-slate-600/50'>
                <AiOutlineMail />
              </div>
            </Link>
            {/* <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:shadow-indigo-500/50'>
                <BsFillPersonLinesFill />
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
