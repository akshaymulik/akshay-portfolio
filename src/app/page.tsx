"use client";
import Head from 'next/head'
import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin,AiFillYoutube,AiFillGithub} from 'react-icons/ai';
import deved from '../../public/AkshayM.webp';
import design from '../../public/design.png';
import code from '../../public/code.png';
import consult from '../../public/consulting.png';
import aiv from "../../public/aiv.png";
import airflow from "../../public/airflow.png";
import linep from "../../public/linep.png";
import rover from "../../public/rover.png";
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode? 'dark' : ''}>
      <Head>
        <title>Akshay M Portfolio</title>
        <meta name="description" content='created by Akshay'></meta>
        <link rel="icon" href="favicon.ico"></link>
      </Head>
      <main className='bg-white px-10 md:px-20 lg:40 dark:bg-gray-900'>
        <section className=' min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons dark:text-white'>Portfolio:</h1>
            <ul className='flex items-center'>
              <li>
                <div className='flex flex-wrap flex-row dark:text-white'>
                  <p> Mode:&nbsp;</p>
                  <BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className='cursor-pointer text-xl'/>
                </div>             
              </li>
              <li><a href='https://raw.githubusercontent.com/akshaymulik/about/main/Akshay_Mulik_Resume.pdf' target='_blank' className='bg-gradient-to-r from-cyan-500 via-teal-500 to-green-500 bg-cyan500 px-4 py-2 text-white rounded-md ml-8'>Resume</a></li>
            </ul>
          </nav>
          <div className='relative mx-auto rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96'>
            <Image src={deved} alt={''} layout='fill' objectFit='cover'/>
          </div>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:tex-6xl'>Akshay M</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Software Developer Engineer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white'>
            <span className='text-teal-500'>Self-learning</span> has been a big part of my journey. Started by maintiaing my PC by reading the motherboard’s user manual, and learning from visiting technicians when I was 11.
            Growth in <span className='text-teal-500'>portable electronics</span> motivated me to build some of my <span className='text-teal-500'>Embedded projects</span>, and tinkering with <span className='text-teal-500'>Android's Open-source</span> and learning how it’s made.
            I love building things that can make a real <span className='text-teal-500'>impact on society</span>. For me, the thrill of designing and creating new products is all about finding <span className='text-teal-500'>innovative solutions</span> to complex problems. 
            Whether it's building a new piece of technology or finding a way to improve an existing one, I'm always up for a challenge.
            <span className='text-teal-600'> If you're looking for someone who's dedicated, creative, and driven to make a difference, then I'm your guy!
            </span></p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <a href="https://www.linkedin.com/in/akshaymulik?_l=en_US" target='_blank'><AiFillLinkedin className='dark:text-blue-400'/></a>
            <a href="https://www.youtube.com/akshaymulik" target='_blank'><AiFillYoutube className='dark:text-rose-700'/></a>
            <a href="https://www.github.com/akshaymulik" target='_blank'><AiFillGithub className='dark:text-white'/></a>
            
          </div>
        </section>
        <section>
          {/* Cards */}
          <div className='lg:flex gap-10 justify-center'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image src={design} width={100} height={100} alt={''}></Image>
              <h3>Beautiful Design</h3>
              <p className='py-2'>
                Create Elegant designs fot yout theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design Tools</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Arcade</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={code} width={100} height={100} alt={''}></Image>
              <h3>Beautiful Design</h3>
              <p className='py-2'>
                Create Elegant designs fot yout theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design Tools</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Arcade</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={consult} width={100} height={100} alt={''}></Image>
              <h3>Beautiful Design</h3>
              <p className='py-2'>
                Create Elegant designs fot yout theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design Tools</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Arcade</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Projects</h3>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <div className='shadow-lg shadow-gray-400 hover:shadow-teal-500 rounded-lg object-cover'>
                <Image src={aiv} alt='Automated Indicators for vehicles' width={"100"} height={'100'} layout="responsive"/>
                <a href="https://www.github.com/akshaymulik/aiv" target='_blank' 
                className='dark:text-white dark:hover:text-teal-500 text-xl hover:text-rose-500'>
                  <div className='flex flex-wrap flex-row'>
                    <AiFillGithub className='mx-3 my-1'/>
                    <p className='text-lg'>/akshaymulik/aiv</p>
                  </div>
                </a>
              </div>
            </div>
            <div className='basis-1/3 flex-1'>
              <div className='shadow-lg shadow-gray-400 hover:shadow-teal-500 rounded-lg object-cover'>
                <Image src={airflow} alt='Data pipeline with Apache Airflow' width={"100"} height={'100'} layout="responsive"/>
                <a href="https://github.com/akshaymulik/Bike_weather" target='_blank' 
                  className='dark:text-white dark:hover:text-teal-500 text-xl hover:text-rose-500'>
                  <div className='flex flex-wrap flex-row'>
                    <AiFillGithub className='mx-3 my-1'/>
                    <p className='text-lg'>/akshaymulik/Bike_weather</p>
                  </div>
                </a>
              </div>
            </div>
            <div className='basis-1/3 flex-1'>
              <div className='shadow-lg shadow-gray-400 hover:shadow-teal-500 rounded-lg object-cover'>
                <Image src={linep} alt='line plotting alogorithm in action'  width={"100"} height={'100'} layout="responsive"/>
                <a href="https://www.github.com/akshaymulik/bresenham-LED" target='_blank' 
                  className='dark:text-white dark:hover:text-teal-500 text-xl hover:text-rose-500'>
                  <div className='flex flex-wrap flex-row'>
                    <AiFillGithub className='mx-3 my-1'/>
                    <p className='text-lg'>/akshaymulik/bresenham-LED</p>
                  </div>
                </a>
              </div>
            </div>
            <div className='basis-1/3 flex-1'>
              <div className='shadow-lg shadow-gray-400 hover:shadow-teal-500 rounded-lg object-cover'>
                <Image src={rover} alt='4WD rover' width={"100"} height={'100'} layout="responsive"/>
                <a href="youtube.com/akshaymulik/" target='_blank' 
                className='dark:text-white dark:hover:text-red-500 text-xl hover:text-rose-500'>
                  <div className='flex flex-wrap flex-row'>
                    <AiFillYoutube className='mx-3 my-1'/>
                    <p className='text-lg'>/akshaymulik/</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section> 
      </main>
    </div>
  )
}
