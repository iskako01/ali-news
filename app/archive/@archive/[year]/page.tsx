import NewsList from "@/components/news/news-list";
import { getNewsForYear } from "@/lib/news";

export default async function FilteredNewsPage(props) {
  const { year } = await props.params;

  const news = getNewsForYear(year);

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}
