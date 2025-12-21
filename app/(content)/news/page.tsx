import NewsList from "@/components/news/news-list";
import { getAllNews } from "@/lib/news";

export default async function NewsPage() {
  const news = getAllNews();

  return (
    <>
      <h1>News Page</h1>

      {news.length && <NewsList news={news} />}
    </>
  );
}
