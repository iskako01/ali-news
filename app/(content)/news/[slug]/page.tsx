import * as React from "react";
import { getNewsBySlug } from "@/lib/news";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function NewsDetailPage({ params }) {
  const { slug } = React.use(params);

  const newsItem = getNewsBySlug(slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <div>
        <Link href={`/news/${newsItem.slug}/image`}>
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width={100}
            height={100}
          />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </div>

      <p>{newsItem.content}</p>
    </article>
  );
}
