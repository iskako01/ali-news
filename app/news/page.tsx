import classes from "./page.module.css";

import { DUMMY_NEWS } from "@/dummy-news";
import NewsItem from "@/components/news/news-item";

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>

      <ul className={classes.newsList}>
        {DUMMY_NEWS.map((newsItem) => (
          <NewsItem key={newsItem.id} newsItem={newsItem} />
        ))}
      </ul>
    </>
  );
}
