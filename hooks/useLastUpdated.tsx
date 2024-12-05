import { useEffect, useState } from "react";

const GITHUB_PATH_URL_PREFIX = `https://api.github.com/repos/JAYKALIA007/galleria/commits?path=`;

export const useLastUpdated = (pathToUrl: string) => {
  const [formattedDate, setFormattedDate] = useState("");
  useEffect(() => {
    fetchLastUpdated(pathToUrl);
  }, []);

  const fetchLastUpdated = async (pathToUrl: string) => {
    const githubUrlWithRealtiveFilePath = GITHUB_PATH_URL_PREFIX + pathToUrl;
    const data = await fetch(githubUrlWithRealtiveFilePath);
    const commits = await data.json();
    const lastUpdatedDate = commits[0]?.commit?.committer?.date;

    setFormattedDate(convertTzToDdMmYy(lastUpdatedDate));
  };

  return { lastUpdatedDate: formattedDate };
};

const convertTzToDdMmYy = (dateInTzFormat: string): string => {
  try {
    const date = new Date(dateInTzFormat);

    if (isNaN(date.getTime())) {
      throw new Error("Invalid date");
    }

    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });
  } catch (error) {
    console.error("Date formatting error:", error);
    return "";
  }
};
