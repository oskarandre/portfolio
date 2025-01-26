"use client";

import { useEffect, useState } from "react";
import { Montserrat, Geist_Mono, Uncial_Antiqua } from "next/font/google";
import Image from "next/image";
import Link from 'next/link';

import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const uncialAntiqua = Uncial_Antiqua({
  variable: "--font-uncial-antiqua",
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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

  const handleClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${geistMono.variable} antialiased`}
      >
        {/*backdrop-blur-sm backdrop-grayscale backdrop-contrast-150 backdrop-brightness-125  */}
        <header className="fixed top-0 font-medium left-0 right-0 p-4 bg-[var(--header-color)] text-black flex items-center justify-between z-50 custom-backdrop ">
          <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <h1 className={`text-6xl ${uncialAntiqua.variable} logo-effect`}>oa</h1>
          </Link>
          </div>
          <nav className="mt-2 flex ml-auto">
            <a href="#project" onClick={() => handleClick("projects")} className={`mx-2 ${currentSection === "projects" ? "text-[var(--secondary-color)]" : ""}`}>PROJECTS</a>
            <a href="#bio" onClick={() => handleClick("bio")} className={`mx-2 ${currentSection === "bio" ? "text-[var(--secondary-color)]" : ""}`}>BIO</a>
          </nav>
        </header>
        <main className="flex-grow">{children}</main>
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
      </body>
    </html>
  );
}
