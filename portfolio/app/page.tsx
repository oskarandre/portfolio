"use client";

import EmblaCarousel from "./carousel";
import { EmblaOptionsType } from 'embla-carousel'
import { useRouter } from 'next/navigation'

const OPTIONS: EmblaOptionsType = { loop: true}
const SLIDES = [
  {
    image: "/project1.png",
    title: "Filmdle",
    description: "A Wordle-inspired movie guessing game.",
    link: "/filmdle"
  },
  {
    image: "/project2.png",
    title: "Project 2",
    description: "Description for project 2",
    link: "/project2"
  },
  {
    image: "/project3.png",
    title: "Project 3",
    description: "Description for project 3",
    link: "/project3"
  },
]

export default function Home() {
  const router = useRouter()
  
  return (
    <div className="flex flex-col "> 
      <section id="home" className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-0">
        <h2 className="text-4xl">Hello, I&apos;m Oskar.</h2>
        <p className="text-center max-w-2xl">
          Welcome to my portfolio. Here you can find information about my projects and skills.
        </p>
      </section>

      <section id="projects" className="min-h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center p-8 sm:p-0">
        <h2 className="text-4xl">Projects</h2>
        <p className="text-center max-w-2xl">
          Here are some of the projects I have worked on.
        </p>
        </div>
        
        <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
      </section>

      <section id="bio" className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-0">
        <h2 className="text-4xl">BIO</h2>
        <p className="text-center max-w-2xl">
          Feel free to reach out to me through any of the following platforms.
        </p>
        {/* Add contact details here */}
      </section>
    </div>
  );
}