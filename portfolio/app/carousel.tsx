"use client";

import React, { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const projects = [
  {
    title: "Filmdle",
    description: "A Wordle-inspired movie guessing game.",
    image: "/project1.png",
  },
  {
    title: "Project 2",
    description: "Description for project 2",
    image: "/project2.png",
  },
  {
    title: "Project 3",
    description: "Description for project 3",
    image: "/project3.png",
  },
];

export function EmblaCarousel() {
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [autoplay.current]
  );

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  const scrollPrev = () => {
    if (emblaApi) {
      emblaApi.plugins().autoplay.stop();
      emblaApi.scrollPrev();
    }
  };

  const scrollNext = () => {
    if (emblaApi) {
      emblaApi.plugins().autoplay.stop();
      emblaApi.scrollNext();
    }
  };
  

  return (
    <div className="embla relative w-full">
      <div className="embla__viewport w-full" ref={emblaRef}>
        <div className="embla__container flex">
          {projects.map((project, index) => (
            <div key={index} className="embla__slide relative min-w-full sm:min-w-[50%] flex-shrink-0 border-2 border-white">
              <img src={project.image} alt={project.title} className="w-full h-64 sm:h-96 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <h3 className="text-2xl">{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}