"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { SLIDESHOW_GITHUB_URL, IMAGES } from "./constants";
import { Button } from "@/components/ui/button";

const Slideshow = () => {
  const handleClick = () => {};
  return (
    <div className="flex flex-col justify-center items-center gap-10 h-full p-4">
      <div className="italic text-center">
        A minimal react component which makes use of{" "}
        <p className="font-medium underline inline">setInterval()</p> and{" "}
        <p className="font-medium underline inline">mouse-events</p> to create a
        slideshow when you hover over the individual cards.
      </div>
      <div className="flex flex-wrap gap-10 justify-center">
        {Array(4)
          .fill("")
          .map((_, index) => (
            <SlideshowCards key={index} />
          ))}
      </div>
      <Button variant="outline">
        <a href={SLIDESHOW_GITHUB_URL} target="_blank">
          CODE
        </a>
      </Button>
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
