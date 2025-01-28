"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Filmdle() {
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      imagesRef.current.forEach((img) => {
        const rect = img.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          img.classList.add('in-view');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen gap-16 flex flex-col items-center justify-center m-0 md:m-16 lg:m-32">
      
      <div className="project-gallery">
        <h2 className='text-4xl mt-16 md:mt-8 lg:mt-0'>Filmdle</h2>
        <p className='text-center max-w-screen'>A Wordle-inspired movie guessing game
          using the FERN stack (Firebase, Express,
          Node.js, React).</p>
        <Link href="https://filmdle.wtf" target="_blank" className="text-blue-500 underline font-bold">
          Try Filmdle 
        </Link>
        <div className="project-gallery-section">
          <img className="drop-shadow-xl" ref={(el) => { if (el) imagesRef.current.push(el); }} src="filmdle/filmdleHome.png" alt="filmdleHome" />
        </div>
        <div className="project-gallery-section two-images">
          <img className="drop-shadow-xl left-image" ref={(el) => { if (el) imagesRef.current.push(el); }} src="filmdle/filmdleLogin.png" alt="filmdleLogin" />
          <img className="drop-shadow-xl right-image" ref={(el) => { if (el) imagesRef.current.push(el); }} src="filmdle/filmdleLogos.png" alt="filmdleLogo" />

        </div>
        <div className="project-gallery-section">
          <img className="drop-shadow-xl" ref={(el) => { if (el) imagesRef.current.push(el); }} src="filmdle/FilmdleVid.gif" alt="FilmdleVid" />
        </div>
        <p className='text-center max-w-screen'>The user can guess the movie by typing in the title, and the app will give feedback on what features are in common with the secret movie.</p>
        <div className="project-gallery-section">
          <img className="drop-shadow-xl" ref={(el) => { if (el) imagesRef.current.push(el); }} src="filmdle/filmdleArchive.png" alt="filmdleArchive" />
        </div>
        <p className='text-center max-w-screen'> Key features include user
          authentication (login/signup), API integration
          with database for movie search and suggestions, real-time data updates to Firebase, an
          archive of past games, user statistics and interactive elements.
        </p>
      </div>
    </div>
  );
}