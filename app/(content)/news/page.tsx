"use client";

import NewsList from "@/components/news/news-list";
import { useEffect, useState } from "react";

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);

      const response = await fetch("http://localhost:8080/news");

      if (!response.ok) {
        setError("Failed to fetch news.");
        setIsLoading(false);
      }

      const newsData = await response.json();

      setIsLoading(false);
      setNews(newsData);
    }

    fetchNews();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <>
        <h1>News Page</h1>
        <p>{error}</p>
      </>
    );
  }

  return (
    <>
      <h1>News Page</h1>

      <NewsList news={news} />
    </>
  );
}
