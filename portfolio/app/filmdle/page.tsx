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
    <div className="min-h-screen gap-16 flex flex-col items-center justify-center p-8 sm:p-0" >
      <h2 className='text-4xl  mt-20 sm:mt-40'>Filmdle</h2>
      <p className='text-center max-w-2xl'>A Wordle-inspired movie guessing game.</p>
      <div className="project-gallery">
        <img ref={(el) => { if (el) imagesRef.current.push(el); }} src="/project1.png" alt="Project 1" />
        <img ref={(el) => { if (el) imagesRef.current.push(el); }} src="/project2.png" alt="Project 2" />
        <img ref={(el) => { if (el) imagesRef.current.push(el); }} src="/project3.png" alt="Project 3" />
        <img ref={(el) => { if (el) imagesRef.current.push(el); }} src="/project2.png" alt="Project 4" />
      </div>
      <Link href="/">Go back</Link>
    </div>
  );
}