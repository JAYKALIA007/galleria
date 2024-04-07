"use client";
import React, { useCallback, useMemo, useState } from "react";
import { EMOJIS_LIST } from "./helper";
import { ConfettiAnimation } from "@/app/components/Confetti";

type Emoji = {
  label: string;
  show: boolean;
};

export const MemoryGame: React.FC = () => {
  const [emojis, setEmojis] = useState<Emoji[]>(
    EMOJIS_LIST.map((emoji) => ({ label: emoji, show: false }))
  );
  const [firstEmojiIndex, setFirstEmojiIndex] = useState<number | null>(null);
  const [tries, setTries] = useState<number>(0);
  const [disableBoard, setDisbaleBoard] = useState<boolean>(false);

  const isWinningTry = useMemo(
    () => emojis.every((emoji) => emoji.show),
    [emojis]
  );

  const handleCardClick = useCallback(
    (index: number) => {
      const updatedTriesCount = tries + 1;
      setTries(updatedTriesCount);

      // if first click
      if (updatedTriesCount % 2 === 1) {
        setFirstEmojiIndex(index);
        const updatedEmojis = emojis.map((emoji, index2) =>
          index === index2 ? { ...emoji, show: true } : emoji
        );
        setEmojis(updatedEmojis);
      }
      //is second click
      else {
        const updatedEmojis = emojis.map((emoji, index2) =>
          index === index2 ? { ...emoji, show: true } : emoji
        );
        setEmojis(updatedEmojis);

        let correspondingEmojiIndex = -1;
        for (let i = 0; i < emojis.length; i++) {
          if (i !== index && emojis[index].label === emojis[i].label) {
            correspondingEmojiIndex = i;
            break;
          }
        }

        const hasSelectedCorrespondingEmoji =
          emojis[correspondingEmojiIndex].show;

        if (hasSelectedCorrespondingEmoji) {
          const updatedEmojis = emojis.map((emoji, index2) =>
            index === index2 ? { ...emoji, show: true } : emoji
          );
          setEmojis(updatedEmojis);
        } else {
          setDisbaleBoard(true);
          setTimeout(() => {
            setDisbaleBoard(false);
            const updatedEmojisNew = emojis.map((emoji, index2) =>
              index === index2 || index2 === firstEmojiIndex
                ? { ...emoji, show: false }
                : emoji
            );
            setEmojis(updatedEmojisNew);

            setFirstEmojiIndex(null);
          }, 5 * 100);
        }
      }
    },
    [emojis, tries, firstEmojiIndex]
  );

  const hasGameStarted = tries > 0;

  return (
    <div className="flex flex-col items-center mt-32 lg:mt-40 gap-y-10">
      <div className="grid grid-cols-4 w-fit">
        {emojis.map((emoji, index) => (
          <button
            key={`${emoji.label}-${index}`}
            className={`w-12 h-12 sm:w-16 sm:h-16 m-2 text-3xl disabled:cursor-not-allowed ${
              emoji.show ? "" : "border rounded-md"
            } `}
            onClick={() => {
              handleCardClick(index);
            }}
            disabled={emoji.show || disableBoard}
          >
            {emoji.show ? emoji.label : ""}
          </button>
        ))}
      </div>
      <div>
        {!hasGameStarted && "All the best. LFG🚀"}
        {hasGameStarted &&
          (isWinningTry ? `Woohoo, you comleted the game in ` : `You've made `)}
        {tries} tries
      </div>
      {hasGameStarted && isWinningTry && <ConfettiAnimation />}
    </div>
  );
};
