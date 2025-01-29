"use client";

import EmblaCarousel from "./carousel";
import EmblaCarouselArt from "./carouselArt";
import { EmblaOptionsType } from 'embla-carousel'
import Image from "next/image";
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
  {
    image: "/reinforcementLearning/hockeyRe.png",
    title: "AI Hockey Game",
    description: "Deep Reinforcement Learning in a hockey game.",
    link: "/reinforcementLearning"
  },
  {
    image: "/sportsAnalytics/sportsAnalytics.png",
    title: "UEFA Euro 2024 Simulations",
    description: "Prediction model for the UEFA Euro 2024.",
    link: "/sportsAnalytics"
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
      const sections = ["home", "projects", "art", "bio", "contact"];
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
          
          <h1 className={`text-6xl ${uncialAntiqua.variable} logo-effect`} onClick={() => handleClick("home")}>oa</h1>
          
        </div>
        <nav className="mt-2 flex ml-auto">
          <a href="#project" onClick={() => handleClick("projects")} className={`mx-2 ${currentSection === "projects" ? "text-[var(--secondary-color)]" : ""}`}>WORK</a>
          <a href="#contact" onClick={() => handleClick("contact")} className={`mx-2 ${currentSection === "contact" ? "text-[var(--secondary-color)]" : ""}`}>CONTACT</a>
        </nav>
      </header>

      <div className="flex flex-col "> 
    
      <section id="home" className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-0">
        <h2 className="text-6xl">Hello, I&apos;m <span className="text-[var(--secondary-color)]">Oskar</span>.</h2>
        <p className="text-center max-w-2xl text-2xl">
        I am a 5th-year student pursuing an M.Sc. in Media Technology and Engineering.
        </p>

        <div className="mt-8">
          <button onClick={() => handleClick("projects")} className="bg-[var(--secondary-color)] text-white px-4 py-2 rounded-lg ">View My Work</button>
        </div>

        <div className="mt-8">
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </section>
      

      <section id="projects" className="min-h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center p-8 sm:p-0">
        <h2 className="text-4xl font-medium mb-8">PROJECTS</h2>
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
        <h2 className="text-4xl mb-8 font-medium">ART</h2>
        
        <EmblaCarouselArt slides={ART_SLIDES} options={OPTIONS}/>

        <div className="mt-8">
          <button onClick={() => handleClick("contact")} className="bg-[var(--secondary-color)] text-white px-4 py-2 rounded-lg">Contact</button>
        </div>

        <div className="mt-8">
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-0">
        <h2 className="text-4xl font-medium mb-4">CONTACT INFORMATION</h2>
        <p className="text-center max-w-2xl mb-10">
            Feel free to reach out to me via email or connect with me on LinkedIn.
          </p>
          
          <div className="flex space-x-4">
            <a href="mailto:oskarjandre@gmail.com" className="bg-[var(--secondary-color)] text-white px-4 py-2 rounded-lg">Email</a>
            <a href="https://www.linkedin.com/in/oskarandre/" target="_blank" className="bg-[var(--secondary-color)] text-white px-4 py-2 rounded-lg">LinkedIn</a>
            <a href="https://www.github.com/oskarandre" target="_blank" className="bg-[var(--secondary-color)] text-white px-4 py-2 rounded-lg">GitHub</a>
          </div>
      </section>

      <footer  className="p-4 bg-[var(--header-color)] text-white text-center w-full">
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