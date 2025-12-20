import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function NewsDetailImagePage(props: {
  params: { slug: string };
}) {
  const { slug } = await props.params;

  const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} fill />
    </div>
  );
}
