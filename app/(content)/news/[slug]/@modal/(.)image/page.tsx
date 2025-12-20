"use client";

import * as React from "react";
import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";

export default function InterceptedNewsDetailImagePage({ params }) {
  const { slug } = React.use(params);
  const router = useRouter();

  const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);

  if (!newsItem) {
    notFound();
  }

  function goBack() {
    router.back();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={goBack} />

      <dialog className="modal" open>
        <div className="fullscreen-image">
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            fill
          />
        </div>
      </dialog>
    </>
  );
}
