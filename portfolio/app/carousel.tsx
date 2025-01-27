"use client";

import React, { useCallback, useState } from 'react';
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

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true })
  ]);
  const [overlay, setOverlay] = useState<SlideType | null>(null);

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

  const openOverlay = (slide: SlideType) => {
    setOverlay(slide);
  };

  const closeOverlay = () => {
    setOverlay(null);
  };

  return (
    <div className="embla relative w-full">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div className="embla__slide relative min-w-full sm:min-w-[50%] flex-shrink-0" key={index}>
              <div onClick={() => openOverlay(slide)} className="cursor-pointer">
                <Image src={slide.image} alt={slide.title} width={500} height={500} className="w-full h-64 sm:h-96 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <h3 className="text-2xl">{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
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

      {overlay && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeOverlay}>
            <button onClick={closeOverlay} className="absolute top-2 right-5 text-white text-xl bg-black bg-opacity-50 p-2 rounded-full">
              X
            </button>
          <div className="relative bg-white rounded-xl max-w-screen w-full h-full mt-32" onClick={(e) => e.stopPropagation()}>
            
            <iframe src={overlay.link} className="w-full h-full rounded-xl" />
          </div>
        </div>
      )}
    </div>
  );
};

export default EmblaCarousel;