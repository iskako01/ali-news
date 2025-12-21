import * as React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getNewsBySlug } from "@/lib/news";

export default function NewsDetailImagePage({ params }) {
  const { slug } = React.use(params);

  const newsItem = getNewsBySlug(slug);
  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} fill />
    </div>
  );
}
