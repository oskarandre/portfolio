"use client";

import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './emblaCarouselArrowButtons'
	
type SlideType = {
    image: string
    title: string
    description: string
    link: string
  }

type PropType = {
  slides: SlideType[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true})
  ])
  const [isPlaying, setIsPlaying] = useState(false)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoScroll = emblaApi?.plugins()?.autoScroll
      if (!autoScroll) return

      const resetOrStop =
        autoScroll.options.stopOnInteraction === false
          ? autoScroll.reset
          : autoScroll.stop

        resetOrStop()
        callback()
    },
    [emblaApi]
  )

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (!autoScroll) return

    setIsPlaying(autoScroll.isPlaying())
    emblaApi
      .on('autoScroll:play', () => setIsPlaying(true))
      .on('autoScroll:stop', () => setIsPlaying(false))
      .on('reInit', () => setIsPlaying(autoScroll.isPlaying()))
  }, [emblaApi])


  return (
    <div className="embla relative w-full">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div className="embla__slide relative min-w-full sm:min-w-[50%] flex-shrink-0" key={index}>
              <a href={slide.link} target="" rel="noopener noreferrer">
                <Image src={slide.image} alt={slide.title} width={500} height={500} className="w-full h-64 sm:h-96 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <h3 className="text-2xl">{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <PrevButton
          onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
          disabled={prevBtnDisabled}
          className="embla__button bg-gray-800 text-white p-2 rounded-full"
        />
        <NextButton
          onClick={() => onButtonAutoplayClick(onNextButtonClick)}
          disabled={nextBtnDisabled}
          className="embla__button bg-gray-800 text-white p-2 rounded-full"
        />
      </div>
    </div>
  )
}

export default EmblaCarousel



// "use client";

// import React, { useEffect, useRef } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";

// const projects = [
//   {
//     title: "Filmdle",
//     description: "A Wordle-inspired movie guessing game.",
//     image: "/project1.png",
//   },
//   {
//     title: "Project 2",
//     description: "Description for project 2",
//     image: "/project2.png",
//   },
//   {
//     title: "Project 3",
//     description: "Description for project 3",
//     image: "/project3.png",
//   },
// ];

// export function EmblaCarousel() {
//   const autoplay = useRef(
//     Autoplay({ delay: 4000, stopOnInteraction: true })
//   );
//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     { loop: true, dragFree: true },
//     [autoplay.current]
//   );

//   useEffect(() => {
//     if (emblaApi) {
//       console.log(emblaApi.slideNodes()); // Access API
//     }
//   }, [emblaApi]);

//   const scrollPrev = () => {
//     if (emblaApi) {
//       emblaApi.plugins().autoplay.stop();
//       emblaApi.scrollPrev();
//     }
//   };

//   const scrollNext = () => {
//     if (emblaApi) {
//       emblaApi.plugins().autoplay.stop();
//       emblaApi.scrollNext();
//     }
//   };
  

//   return (
//     <div className="embla relative w-full">
//       <div className="embla__viewport w-full" ref={emblaRef}>
//         <div className="embla__container flex">
//           {projects.map((project, index) => (
//             <div key={index} className="embla__slide relative min-w-full sm:min-w-[50%] flex-shrink-0 border-2 border-white">
//               <img src={project.image} alt={project.title} className="w-full h-64 sm:h-96 object-cover" />
//               <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
//                 <h3 className="text-2xl">{project.title}</h3>
//                 <p>{project.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <button
//         onClick={scrollPrev}
//         className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M15 19l-7-7 7-7"
//           />
//         </svg>
//       </button>
//       <button
//         onClick={scrollNext}
//         className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 24 24"
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M9 5l7 7-7 7"
//           />
//         </svg>
//       </button>
//     </div>
//   );
// }