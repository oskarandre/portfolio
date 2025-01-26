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
        } else {
          img.classList.remove('in-view');
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
    <div className="min-h-screen gap-16 flex flex-col items-center justify-center p-8 sm:p-0">
      <h2 className='text-4xl mt-20 sm:mt-40'>Filmdle</h2>
      <Link href="/">Go back</Link>
      <p className='text-center max-w-2xl'>A Wordle-inspired movie guessing game.</p>
      <div className="project-gallery m-8 sm:m-32">
        <div className="project-gallery-section">
          <img className="drop-shadow-xl m-10" ref={(el) => { if (el) imagesRef.current.push(el); }} src="filmdleHome.png" alt="filmdleHome" />
        </div>
        <div className="project-gallery-section three-images">
          <img className="drop-shadow-xl m-10 left-image" ref={(el) => { if (el) imagesRef.current.push(el); }} src="/filmdleLogin.png" alt="filmdleLogin" />
          <div className="right-images">
            <img className="drop-shadow-xl m-10" ref={(el) => { if (el) imagesRef.current.push(el); }} src="/filmdleLogos.png" alt="filmdleLogo" />
          </div>
        </div>
        <div className="project-gallery-section">
          <img className="drop-shadow-xl m-10" ref={(el) => { if (el) imagesRef.current.push(el); }} src="/FilmdleVid.gif" alt="FilmdleVid" />
        </div>
        <div className="project-gallery-section">
          <img className="drop-shadow-xl m-10" ref={(el) => { if (el) imagesRef.current.push(el); }} src="/filmdleArchive.png" alt="filmdleArchive" />
        </div>
      </div>
    </div>
  );
}