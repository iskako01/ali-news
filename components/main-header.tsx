import Link from "next/link";

export default function MainHeader() {
  return (
    <header>
      <h1>Header</h1>

      <p>
        <Link href="/">Home</Link>
      </p>
      <p>
        <Link href="/news">News</Link>
      </p>
    </header>
  );
}
