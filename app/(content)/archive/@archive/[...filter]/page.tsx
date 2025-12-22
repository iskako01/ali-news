import React, { Suspense } from "react";
import NewsList from "@/components/news/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";

function FilteredNews({ year, month }) {
  let news = [];
  let newsContent = <p>No news found for the chosen filter!</p>;

  if (year && !month) {
    news = getNewsForYear(year);
  } else if (year && month) {
    news = getNewsForYearAndMonth(year, month);
  }

  if (news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return newsContent;
}

function FilteredLinks({ year, month }) {
  const availableYears = getAvailableNewsYears() ?? [];
  const availableMonths = getAvailableNewsMonths(year);

  let links = availableYears;

  if (year && !month) {
    links = getAvailableNewsMonths(year);
  }

  if (year && month) {
    links = [];
  }

  const isAvailableNewsYear = year && availableYears.includes(+year);
  const isAvailableNewsMonth = month && availableMonths.includes(+month);

  if (!isAvailableNewsYear || !isAvailableNewsMonth) {
    // throw new Error("Invalid filter.");
  }

  return (
    <nav>
      <ul>
        {links.map((link) => {
          const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;

          return (
            <li key={link}>
              <Link href={href}>{link}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default function FilteredNewsPage({ params }) {
  const { filter } = React.use(params);

  const selectedYear = filter?.[0] || null;
  const selectedMonth = filter?.[1] || null;

  return (
    <>
      <header className="archive-header">
        <Suspense fallback={<p>Loading filtered links...</p>}>
          <FilteredLinks year={selectedYear} month={selectedMonth} />
        </Suspense>
      </header>
      <Suspense fallback={<p>Loading filtered news...</p>}>
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}
