"use client";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Cross1Icon } from "@radix-ui/react-icons";
import { tags } from "./constants";

type AddTagsPropsType = {};

export const AddTags: React.FC<AddTagsPropsType> = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<Array<string>>();

  useEffect(() => {
    const handleKeyListener = (event: KeyboardEvent) => {
      if (searchQuery.trim().length === 0 && event.key === "Backspace") {
        if (selectedTags && selectedTags.length > 0) {
          const updatedTags = selectedTags.slice(0, -1);
          setSelectedTags(updatedTags);
        }
      }
    };

    window.addEventListener("keydown", handleKeyListener);

    return () => {
      window.removeEventListener("keydown", handleKeyListener);
    };
  }, [searchQuery, selectedTags]);

  const filteredTags = useMemo(() => {
    const lowerCaseQuery = searchQuery.toLocaleLowerCase();
    const filtered = tags.filter(
      (tag) =>
        tag.toLocaleLowerCase().includes(lowerCaseQuery) &&
        !(selectedTags && selectedTags.includes(tag))
    );
    return filtered;
  }, [searchQuery, selectedTags]);

  const inputFocus = () => {
    inputRef?.current?.focus();
  };

  const handleAddTag = useCallback(
    (tag: string) => {
      const updatedTags = selectedTags ? [...selectedTags, tag] : [tag];
      setSelectedTags(updatedTags);
      setSearchQuery("");
      inputFocus();
    },
    [selectedTags]
  );

  const handleRemoveTag = useCallback(
    (tag: string) => {
      const updatedTags = selectedTags?.filter((item) => item !== tag);
      setSelectedTags(updatedTags);
      inputFocus();
    },
    [selectedTags]
  );

  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="relative">
      <div className="bg-gray-100 dark:bg-gray-800 rounded-md shadow-md flex gap-2 flex-wrap p-1.5">
        {selectedTags &&
          selectedTags.map((tag) => (
            <div
              key={tag}
              className="bg-gray-200 dark:bg-gray-950 p-1.5 rounded-md flex gap-2 items-center shadow-md"
            >
              {tag}
              <button onClick={() => handleRemoveTag(tag)}>
                <Cross1Icon height={10} width={10} />
              </button>
            </div>
          ))}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="cursor-text bg-gray-100 dark:bg-gray-800 p-1.5 focus:outline-none max-w-24 overflow-scroll"
          autoFocus
          ref={inputRef}
          placeholder="+ Add tag"
        />
      </div>
      {searchQuery.trim().length > 0 && (
        <div className="flex w-full justify-center items-center">
          <div className="bg-gray-100 dark:bg-gray-800 mt-6 shadow-lg p-1.5 w-60 rounded-md max-h-40 overflow-scroll">
            {filteredTags.length > 0 ? (
              <div className="flex flex-col gap-1">
                {filteredTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleAddTag(tag)}
                    className="hover:bg-gray-200 hover:dark:bg-gray-950 w-full p-2 rounded-md flex justify-start"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            ) : (
              <div className="p-1">No tags found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
