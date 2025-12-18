import classes from "./news-list.module.css";
import NewsItem from "@/components/news/news-item";

export default function NewsList({ news }) {
  return (
    <ul className={classes.newsList}>
      {news.map((newsItem) => (
        <NewsItem key={newsItem.id} newsItem={newsItem} />
      ))}
    </ul>
  );
}
