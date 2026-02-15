import Image from 'next/image';
import React from 'react';
import useInView from '../hooks/useInView';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import Firebase from '../public/assets/skills/firebase.png';
import NextJS from '../public/assets/skills/nextjs.png';
import AWS from '../public/assets/skills/aws.png';
import NodeJS from '../public/assets/skills/node.png';
import TypeScript from '../public/assets/skills/typescript.png';
import Kotlin from '../public/assets/skills/kotlin.png';
import Swift from '../public/assets/skills/swift.png';
import PostgreSQL from '../public/assets/skills/postgresql.png';

const Skills = () => {
  const [ref, isVisible] = useInView();
  return (
    <div id='skills' className='w-full lg:h-screen p-2 py-24 border-t border-gray-200/60 dark:border-slate-700/60'>
      <div ref={ref} className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 animate-stagger ${isVisible ? 'visible' : ''}`}>
          <div className='p-6 rounded-xl hover:scale-105 ease-in duration-300 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-white/10'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Html} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className='p-6 rounded-xl hover:scale-105 ease-in duration-300 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-white/10'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Css} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 rounded-xl hover:scale-105 ease-in duration-300 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-white/10'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Javascript} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 rounded-xl hover:scale-105 ease-in duration-300 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-white/10'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={ReactImg} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className='p-6 rounded-xl hover:scale-105 ease-in duration-300 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-white/10'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Tailwind} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className='p-6 rounded-xl hover:scale-105 ease-in duration-300 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-white/10'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Firebase} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className='p-6 rounded-xl hover:scale-105 ease-in duration-300 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-white/10'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Github} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className='p-6 rounded-xl hover:scale-105 ease-in duration-300 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-white/10'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={NextJS} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Next</h3>
              </div>
            </div>
          </div>
          <div className='p-6 rounded-xl hover:scale-105 ease-in duration-300 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-white/10'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={TypeScript} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>TypeScript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 rounded-xl hover:scale-105 ease-in duration-300 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-white/10'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={NodeJS} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Node.js</h3>
              </div>
            </div>
          </div>
          <div className='p-6 rounded-xl hover:scale-105 ease-in duration-300 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-white/10'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Kotlin} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Kotlin</h3>
              </div>
            </div>
          </div>
          <div className='p-6 rounded-xl hover:scale-105 ease-in duration-300 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-white/10'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Swift} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Swift</h3>
              </div>
            </div>
          </div>
          <div className='p-6 rounded-xl hover:scale-105 ease-in duration-300 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-white/10'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={PostgreSQL} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>PostgreSQL</h3>
              </div>
            </div>
          </div>
          <div className='p-6 rounded-xl hover:scale-105 ease-in duration-300 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-white/10'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={AWS} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>AWS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
