"use client";

import EmblaCarousel from "./carousel";
import { EmblaOptionsType } from 'embla-carousel'
import Image from "next/image";
import Link from 'next/link';
//import { useRouter } from 'next/navigation'
import {Uncial_Antiqua } from "next/font/google";
import { useEffect, useState } from "react";


const uncialAntiqua = Uncial_Antiqua({
  variable: "--font-uncial-antiqua",
  subsets: ["latin"],
  weight: "400",
});

const OPTIONS: EmblaOptionsType = { loop: true}
const SLIDES = [
  {
    image: "/filmdle/filmdleHome.png",
    title: "Filmdle",
    description: "A Wordle-inspired movie guessing game.",
    link: "/filmdle"
  },
  {
    image: "/arFootball/arFootball.png",
    title: "AR Football Dribbling Game",
    description: "An interactive football dribbling game with a projected field.",
    link: "/arFootball"
  },
  {
    image: "/project3.png",
    title: "Project 3",
    description: "Description for project 3",
    link: "/project3"
  },
]



export default function Home() {
  //const router = useRouter()
  const handleClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [currentSection, setCurrentSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "bio"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setCurrentSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  return (
    <>
      <header className="fixed top-0 font-medium left-0 right-0 p-4 bg-[var(--header-color)] text-black flex items-center justify-between z-50 custom-backdrop ">
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <h1 className={`text-6xl ${uncialAntiqua.variable} logo-effect`}>oa</h1>
          </Link>
        </div>
        <nav className="mt-2 flex ml-auto">
          <a href="#project" onClick={() => handleClick("projects")} className={`mx-2 ${currentSection === "projects" ? "text-[var(--secondary-color)]" : ""}`}>WORK</a>
          <a href="#bio" onClick={() => handleClick("bio")} className={`mx-2 ${currentSection === "bio" ? "text-[var(--secondary-color)]" : ""}`}>BIO</a>
        </nav>
      </header>

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
        I am a 5th-year student pursuing an M.Sc. in Media Technology and Engineering at Linköping University, Sweden. 
        I have a strong passion for programming, design, 3D modeling, and AI. With a creative mindset and a technical foundation, I enjoy combining these skills to develop innovative solutions and explore new technologies.
        </p>
        {/* Add contact details here */}
      </section>

      <footer className="p-4 bg-[var(--header-color)] text-white text-center w-full">
          <div className="mt-2">
            <a href="https://www.linkedin.com/in/oskarandre/" target="_blank">
              <Image src="/linkedin.svg" alt="LinkedIn" className="inline-block w-10 mr-5" width={100} height={100} />
            </a>
            <a href="https://github.com/oskarandre/" target="_blank">
              <Image src="/github.svg" alt="GitHub" className="inline-block w-10 " width={100} height={100}/>
            </a>
          </div>
          <p className="text-xs text-black mt-2">OSKAR ANDRÈ &copy;2025</p>
        </footer>
    </div>
    </>
  );
}