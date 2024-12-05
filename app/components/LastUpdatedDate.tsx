"use client";

import { useLastUpdated } from "@/hooks/useLastUpdated";
import { CalendarIcon } from "@radix-ui/react-icons";

export const LastUpdatedDate = ({ relativePath }: { relativePath: string }) => {
  const { lastUpdatedDate } = useLastUpdated(relativePath);

  if (!lastUpdatedDate) return <DateShimmer />;

  return (
    <div className="flex gap-2 items-center text-[10px] md:text-xs text-gray-500">
      <CalendarIcon />
      <span>Updated: {lastUpdatedDate}</span>
    </div>
  );
};

const DateShimmer = () => (
  <div className="rounded-md h-4 w-28 md:w-32 animate-pulse bg-gray-200 dark:bg-gray-800"></div>
);
