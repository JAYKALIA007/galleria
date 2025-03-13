"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const PageViewCounter = () => {
  const [pageViews, setPageViews] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const fetchPageViews = async () => {
      setLoading(true);
      try {
        const currentUrl = window.origin + pathname;

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_POSTHOG_HOST}/api/projects/@current/insights/trend/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_POSTHOG_PERSONAL_API_KEY}`,
            },
            body: JSON.stringify({
              events: [{ id: "$pageview", name: "$pageview", type: "events" }],
              properties: [
                {
                  key: "$current_url",
                  value: currentUrl,
                  operator: "exact",
                  type: "event",
                },
              ],
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`API returned ${response.status}`);
        }

        const data = await response.json();
        setPageViews(data?.result?.[0]?.count || 0);
      } catch (error) {
        console.error("Error fetching page views:", error);
        setPageViews(0);
      } finally {
        setLoading(false);
      }
    };

    fetchPageViews();
  }, [pathname]);

  return (
    <div className="text-xs md:text-sm text-gray-500">
      {loading ? <span>...</span> : <span>{pageViews} views</span>}
    </div>
  );
};
