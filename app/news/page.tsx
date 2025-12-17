import Link from "next/link";

export default function NewsPage() {
  return (
    <div>
      <h1>News Page</h1>
      <p>
        <Link href="/news/first">first</Link>
      </p>
      <p>
        <Link href="/news/second">second</Link>
      </p>
      <p>
        <Link href="/news/third">third</Link>
      </p>
    </div>
  );
}
