import sqlite from "better-sqlite3";

const db = sqlite("data.db");

export function getAllNews() {
  const news = db.prepare("SELECT * FROM news").all();

  return news;
}

export function getNewsBySlug(slug) {
  const news = getAllNews();

  return news.find((item) => item.slug === slug);
}

export function getLatestNews() {
  const news = getAllNews();

  return news.slice(0, 3);
}

export function getAvailableNewsYears() {
  const news = getAllNews();

  return news
    .reduce((years, news) => {
      const year = new Date(news.date).getFullYear();
      if (!years.includes(year)) {
        years.push(year);
      }
      return years;
    }, [])
    .sort((a, b) => b - a);
}

export function getAvailableNewsMonths(year) {
  const news = getAllNews();

  return news
    .reduce((months, news) => {
      const newsYear = new Date(news.date).getFullYear();
      if (newsYear === +year) {
        const month = new Date(news.date).getMonth();
        if (!months.includes(month)) {
          months.push(month + 1);
        }
      }
      return months;
    }, [])
    .sort((a, b) => b - a);
}

export function getNewsForYear(year) {
  const news = getAllNews();

  return news.filter((news) => new Date(news.date).getFullYear() === +year);
}

export function getNewsForYearAndMonth(year, month) {
  const news = getAllNews();

  return news.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}
