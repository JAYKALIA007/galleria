import React from "react";
import { ALPHABET_REGEX, WORD_LENGTH } from "../wordle/helper";
import { Input as InputElement } from "@/components/ui/input";

type InputPropsType = {
  inputRef: React.RefObject<HTMLInputElement>;
  guess: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
};

export const Input: React.FC<InputPropsType> = ({
  inputRef,
  guess,
  onChange,
  disabled,
}) => {
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;

    if (ALPHABET_REGEX.test(inputValue) || inputValue === "") {
      onChange(event);
    }
  }

  return (
    <InputElement
      autoFocus
      ref={inputRef}
      type="text"
      minLength={WORD_LENGTH}
      maxLength={WORD_LENGTH}
      value={guess}
      disabled={disabled}
      onInput={handleInputChange}
      className="h-8"
    />
  );
};
