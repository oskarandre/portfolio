"use client";

import React, { useEffect, useRef } from 'react';
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
    <div className="min-h-screen gap-16 flex flex-col items-center justify-center m-0 md:m-16 lg:m-32 pb-32">
      <div className="project-gallery">
        <h2 className='text-4xl mt-16 md:mt-8 lg:mt-0'>Thermal Comfort App</h2>
        <hr className="border-black w-80 lg:w-96" />
        <p className='text-center max-w-screen text-xs '>Date: May 2023</p>
        <p className='text-center max-w-screen'>Developed a mobile application mockup for the research group Vallastaden Energy Design. 
          The app aims to assist residents in logging thermal comfort data in their apartments, supporting the group&apos;s studies on indoor climate and energy efficiency. 
        </p>

        <div className="project-gallery-section two-images">
          <img className="drop-shadow-xl left-image" ref={(el) => { if (el) imagesRef.current.push(el); }} src="thermal/first.png" alt="thermalHome" />
          <img className="drop-shadow-xl left-image" ref={(el) => { if (el) imagesRef.current.push(el); }} src="thermal/code.png" alt="thermalCode" />

        </div>

        <div className="project-gallery-section two-images">
          <img className="drop-shadow-xl left-image" ref={(el) => { if (el) imagesRef.current.push(el); }} src="thermal/calendar.png" alt="thermalCalendar" />
          <img className="drop-shadow-xl left-image" ref={(el) => { if (el) imagesRef.current.push(el); }} src="thermal/meny.png" alt="thermalmeny" />

        </div>

        <p className='text-center max-w-screen'>The app includes a calendar for logging thermal comfort data, and a menu for navigation.
        </p>

        <div className="project-gallery-section two-images">
          <img className="drop-shadow-xl left-image" ref={(el) => { if (el) imagesRef.current.push(el); }} src="thermal/akt1.png" alt="thermalAkt1" />
          <img className="drop-shadow-xl left-image" ref={(el) => { if (el) imagesRef.current.push(el); }} src="thermal/akt2.png" alt="thermalAkt2" />

        </div>

        <div className="project-gallery-section two-images">
          <img className="drop-shadow-xl left-image" ref={(el) => { if (el) imagesRef.current.push(el); }} src="thermal/akt3.png" alt="thermalAkt3" />
          <img className="drop-shadow-xl left-image" ref={(el) => { if (el) imagesRef.current.push(el); }} src="thermal/akt5.png" alt="thermalAkt5" />

        </div>

        <div className="project-gallery-section two-images">
          <img className="drop-shadow-xl left-image" ref={(el) => { if (el) imagesRef.current.push(el); }} src="thermal/akt6.png" alt="thermalAkt6" />
          <img className="drop-shadow-xl left-image" ref={(el) => { if (el) imagesRef.current.push(el); }} src="thermal/edit.png" alt="thermalEdit" />

        </div>

      </div>
    </div>
  );
}