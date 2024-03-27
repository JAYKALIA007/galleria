"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IMAGES } from "./constants";

const Slideshow = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10 h-full p-4">
      {Array(4)
        .fill("")
        .map((_, index) => (
          <SlideshowCards key={index} />
        ))}
    </div>
  );
};

const SlideshowCards: React.FC = () => {
  const [playSlide, setPlaySlide] = useState(false);
  const [index, setIndex] = useState(0);
  const [lastDisplayedIndex, setLastDisplayedIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let index = lastDisplayedIndex;
    if (playSlide) {
      interval = setInterval(() => {
        if (index < IMAGES.length - 1) {
          index++;
        } else {
          index = 0;
        }
        setIndex(index);
      }, 8 * 100);
    }
    return () => clearInterval(interval);
  }, [playSlide, lastDisplayedIndex]);

  const handleMouseEnter = () => {
    setPlaySlide(true);
  };

  const handleMouseLeave = () => {
    setPlaySlide(false);
    setLastDisplayedIndex(index);
  };

  const imgUrl = IMAGES[index];

  return (
    <div>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Image
          width={200}
          height={200}
          src={imgUrl}
          alt=""
          className="object-fit rounded-md shadow-2xl shadow-gray-700 cursor-pointer h-56 w-56"
        />
      </div>
    </div>
  );
};

export default Slideshow;
