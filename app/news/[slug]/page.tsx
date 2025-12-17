import Link from "next/link";

export default async function NewsDetailPage(props: {
  params: { slug: string };
}) {
  const { slug } = await props.params;

  return (
    <div>
      <h1>News Detail Page</h1>
      <p>You are viewing the news article: {slug}</p>
    </div>
  );
}
