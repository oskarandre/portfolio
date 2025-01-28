"use client";

import EmblaCarousel from "./carousel";
import EmblaCarouselArt from "./carouselArt";
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
    title: "AR Football Game",
    description: "An interactive football game with a projected field.",
    link: "/arFootball"
  },
  {
    image: "/thermal/thermalComfort.png",
    title: "Thermal Comfort App",
    description: "Application to log thermal comfort data.",
    link: "/thermalComfort"
  },
]

const ART_SLIDES = [
  {
    image: "/art/porsche911.png",
    title: "porsche911",
    description: "",
    link: ""
  },
  {
    image: "/art/dotts.png",
    title: "dotts",
    description: "",
    link: ""
  },
  {
    image: "/art/glass.png",
    title: "Stained Glass",
    description: "",
    link: ""
  },
  {
    image: "/art/kamikaze.png",
    title: "kamikaze",
    description: "",
    link: ""
  },
  {
    image: "/art/kamikazePoster.jpg",
    title: "kamikaze Poster",
    description: "",
    link: ""
  },
  {
    image: "/art/festliuheter.png",
    title: "festliuheter",
    description: "",
    link: ""
  },
  {
    image: "/art/cards.png",
    title: "EWB cards",
    description: "",
    link: ""
  },
  {
    image: "/art/Lounge_area.png",
    title: "EWN Lounge Area",
    description: "",
    link: ""
  },

  {
    image: "/art/iron.png",
    title: "Iron",
    description: "",
    link: ""
  },
  {
    image: "/art/strand.png",
    title: "strand",
    description: "",
    link: ""
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
      const sections = ["home", "projects", "art", "bio"];
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
        <h2 className="text-4xl">Hello, I&apos;m <span className="text-[var(--secondary-color)]">Oskar</span>.</h2>
        <p className="text-center max-w-2xl">
          Welcome to my portfolio. Here you can find information about my projects and skills.
        </p>

        <div className="mt-8">
          <button onClick={() => handleClick("projects")} className="bg-[var(--secondary-color)] text-white px-4 py-2 rounded-lg">View Projects</button>
        </div>

        <div className="mt-8">
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </section>
      

      <section id="projects" className="min-h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center p-8 sm:p-0">
        <h2 className="text-4xl mb-8">Projects</h2>
        </div>
        
        <EmblaCarousel slides={SLIDES} options={OPTIONS}/>

        <div className="mt-8">
          <button onClick={() => handleClick("art")} className="bg-[var(--secondary-color)] text-white px-4 py-2 rounded-lg">Art</button>
        </div>

        <div className="mt-8">
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </section>

      <section id="art" className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-0">
        <h2 className="text-4xl">Art</h2>
        
        <EmblaCarouselArt slides={ART_SLIDES} options={OPTIONS}/>

        <div className="mt-8">
          <button onClick={() => handleClick("bio")} className="bg-[var(--secondary-color)] text-white px-4 py-2 rounded-lg">Bio</button>
        </div>

        <div className="mt-8">
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </section>

      <section className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-0">
        <h2 className="text-4xl">BIO</h2>
        <p className="text-center max-w-2xl">
        I am a 5th-year student pursuing an M.Sc. in Media Technology and Engineering at Linköping University, Sweden. 
        I have a strong passion for programming, design, 3D modeling, and AI. With a creative mindset and a technical foundation, I enjoy combining these skills to develop innovative solutions and explore new technologies.
        </p>
        {/* Add contact details here */}
      </section>

      <footer id="bio" className="p-4 bg-[var(--header-color)] text-white text-center w-full">
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