"use client";
import React, { useEffect, useState } from "react";
import { EMOJIS_LIST } from "./helper";

type MemoryGamePropsType = {};

const MemoryGame: React.FC<MemoryGamePropsType> = () => {
  const emojisObj = EMOJIS_LIST.map((emoji) => ({ label: emoji, show: false }));

  const [emojis, setEmojis] = useState(emojisObj);

  useEffect(() => {}, [emojis]);

  const showCount = emojis.filter((emoji) => emoji.show).length;
  // use this to figure out if first click or second click ->
  // if first clik then update show else update shpw for 2 seconds then undo it too

  return (
    <div>
      <div className="grid grid-cols-4 w-full">
        {emojis.map((emoji, index) => (
          <button
            key={`${emoji.label}-${index}`}
            className="border w-20 h-20 m-2 text-3xl"
            onClick={() => {
              console.log({ index });
              const updatedEmojis = emojis.map((emoji, index2) =>
                index === index2 ? { ...emoji, show: !emoji.show } : emoji
              );
              setEmojis(updatedEmojis);
            }}
          >
            {emoji.show ? emoji.label : ""}
          </button>
        ))}
      </div>
      {showCount}
    </div>
  );
};

export default MemoryGame;

/**
 * R -
 *  1. emojis list
 *  2. a 4x4 grid - using a 16 length array and display using grid
 *  3. an emoji to show at each position - constants
 *  4. on click an emoji - keep showing it until the next emoji is clicked
 *      1. if emoji match - keep showing
 *      2. else - make both false
 *
 * A -
 *  1. local state - emojis array of object which has a visited/show field and label
 *  2. on click on emoji make its show  = true
 *  3. on click on next position
 *     1. make it visible
 *     2. check if both emojis match
 *         1. if match - keep showing them
 *         2. else - make both of them ka show = false
 *  4. a check which is called whenever a cell is clicked to see if all are visible
 *      1. if yes - show a success message
 *
 * D -
 *
 *
 *
 * I -
 *
 *
 *
 * O -
 */
