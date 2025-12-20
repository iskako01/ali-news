import NewsList from "@/components/news/news-list";
import { getLatestNews } from "@/lib/news";

export default function LatestNewsPage() {
  const latestNews = getLatestNews();

  return (
    <div>
      <h1>Latest News Page</h1>
      <NewsList news={latestNews} />
    </div>
  );
}
