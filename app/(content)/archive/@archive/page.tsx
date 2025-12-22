import NewsList from "@/components/news/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";
import React from "react";

export default function ArchiveNewsPage({ params }) {
  const { filter } = React.use(params);
  const selectedYear = filter?.[0] || null;
  const selectedMonth = filter?.[1] || null;

  let news = [];
  let newsContent = <p>No news found for the chosen filter!</p>;
  let links = getAvailableNewsYears() ?? [];

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  if (news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  const isAvailableNewsYear =
    selectedYear && getAvailableNewsYears().includes(+selectedYear);
  const isAvailableNewsMonth =
    selectedMonth &&
    getAvailableNewsMonths(selectedYear).includes(+selectedMonth);

  if (isAvailableNewsYear || !isAvailableNewsMonth) {
    // throw new Error("Invalid filter.");
    console.log(isAvailableNewsYear, !isAvailableNewsMonth);
  }

  return (
    <>
      <header className="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;

              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
