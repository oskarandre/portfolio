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
        <h2 className='text-4xl mt-16 md:mt-8 lg:mt-0'>AR Football</h2>
        <p className='text-center max-w-screen'> An interactive football dribbling game with a projected field,
          incorporating image recognition and motion tracking for real-time football detection.
          Built using Pyglet, YOLOv8, CVAT, and color
          space manipulation.</p>

        <div className="project-gallery-section">
        <iframe
            width="1920"
            height="1080"
            src="https://www.youtube.com/embed/Wqn05F_NLoM?si=XS3FXIhLHhFeqeRt"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-80 lg:w-[900px] h-40 lg:h-[506px]"
          ></iframe>
        </div>

        <div className="project-gallery-section two-images">
          <img className="drop-shadow-xl left-image" ref={(el) => { if (el) imagesRef.current.push(el); }} src="arFootball/yolo.png" alt="yolo1" />
          <img className="drop-shadow-xl right-image" ref={(el) => { if (el) imagesRef.current.push(el); }} src="arFootball/yolo2.png" alt="yolo2" />

        </div>

        <p className='text-center max-w-screen'>The first version of app uses YOLOv8 for real-time object detection, tracking, and classification of footballs. 
          However, the model's performance on a mid-range PC was too slow to support real-time tracking, making it impractical for live applications.
        </p>

        <div className="project-gallery-section">
          <img className="drop-shadow-xl" ref={(el) => { if (el) imagesRef.current.push(el); }} src="arFootball/colormanipulation.png" alt="colormanipulation" />
        </div>

        <p className='text-center max-w-screen'>The second version of the app uses color space manipulation to detect the football. 
          This method is more efficient and faster than YOLOv8, but it is less accurate and requires a more controlled environment to work properly.
        </p>

        <div className="project-gallery-section two-images">
          <img className="drop-shadow-xl left-image" ref={(el) => { if (el) imagesRef.current.push(el); }} src="arFootball/football1.png" alt="football1" />
          <img className="drop-shadow-xl right-image" ref={(el) => { if (el) imagesRef.current.push(el); }} src="arFootball/football2.png" alt="football2" />
        </div>
        <p className='text-center max-w-screen'> The objective is to move the football into the goal before time ran out. We implemented a variety of exercises, each designed to simulate different scenarios and challenges.
        </p>
        <div className="project-gallery-section">
          <img className="drop-shadow-xl" ref={(el) => { if (el) imagesRef.current.push(el); }} src="arFootball/footballProj.png" alt="footballProj" />
        </div>

        <p className='text-center max-w-screen'>Field projection was achieved using a projector and a camera. The camera captures the field, and the projector maps and projects the field onto the ground.
        </p>
      </div>
    </div>
  );
}