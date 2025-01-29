"use client";

import React, { useCallback, useState, useEffect } from 'react';
import Image from 'next/image';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './emblaCarouselArrowButtons';

type SlideType = {
  image: string;
  title: string;
  description: string;
  link: string;
};

type PropType = {
  slides: SlideType[];
  options?: EmblaOptionsType;
};

const EmblaCarouselArt: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true })
  ]);
  const [overlayIndex, setOverlayIndex] = useState<number | null>(null);
  const [autoScrollTimeout, setAutoScrollTimeout] = useState<NodeJS.Timeout | null>(null);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoScroll = emblaApi?.plugins()?.autoScroll;
      if (!autoScroll) return;

      const resetOrStop =
        autoScroll.options.stopOnInteraction === false
          ? autoScroll.reset
          : autoScroll.stop;

      resetOrStop();
      callback();
    },
    [emblaApi]
  );

  const openOverlay = (index: number) => {
    setOverlayIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    emblaApi?.plugins()?.autoScroll?.stop(); // Pause auto-scroll
    if (autoScrollTimeout) {
      clearTimeout(autoScrollTimeout);
    }
  };

  const closeOverlay = () => {
    setOverlayIndex(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
    restartAutoScroll();
  };

  const showNextImage = () => {
    if (overlayIndex !== null) {
      setOverlayIndex((overlayIndex + 1) % slides.length);
    }
  };

  const showPrevImage = () => {
    if (overlayIndex !== null) {
      setOverlayIndex((overlayIndex - 1 + slides.length) % slides.length);
    }
  };

  const restartAutoScroll = () => {
    const timeout = setTimeout(() => {
      emblaApi?.plugins()?.autoScroll?.play();
    }, 10000); // Restart auto-scroll after 10 seconds
    setAutoScrollTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto'; // Ensure scrolling is restored on unmount
      if (autoScrollTimeout) {
        clearTimeout(autoScrollTimeout);
      }
    };
  }, [autoScrollTimeout]);

  return (
    <div className="embla relative w-full">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex ">
          {slides.map((slide, index) => (
            <div className="art_slide flex items-center justify-center" key={index}>
              <div onClick={() => openOverlay(index)} className="cursor-pointer">
                <Image src={slide.image} alt={slide.title} width={300} height={300} className="artImage w-auto max-w-80 max-h-96 m-5" />
              </div>
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

      {overlayIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeOverlay}>
          <div className="relative rounded-xl max-w-screen mt-32 mb-32 w-full h-full" onClick={(e) => e.stopPropagation()}>
            <div className="m-10">
              <Image src={slides[overlayIndex].image} alt="Overlay Image" layout="fill" objectFit="contain" className="rounded-xl" />
            </div>
          </div>
          <button onClick={closeOverlay} className="absolute top-2 right-5 text-white text-xl bg-black bg-opacity-50 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button onClick={(e) => { e.stopPropagation(); showPrevImage(); }} className="absolute left-5 text-white text-xl bg-black bg-opacity-50 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={(e) => { e.stopPropagation(); showNextImage(); }} className="absolute right-5 text-white text-xl bg-black bg-opacity-50 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default EmblaCarouselArt;