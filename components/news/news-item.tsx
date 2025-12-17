import Image from "next/image";
import Link from "next/link";

export default function NewsItem({ newsItem }) {
  return (
    <>
      <li>
        <Link href={`/news/${newsItem.slug}`}>
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width={300}
            height={200}
          />
          <span>{newsItem.title}</span>
        </Link>
      </li>
    </>
  );
}
