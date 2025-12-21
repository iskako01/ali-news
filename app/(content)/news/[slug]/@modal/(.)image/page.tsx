"use client";

import * as React from "react";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";
import { getNewsBySlug } from "@/lib/news";

export default function InterceptedNewsDetailImagePage({ params }) {
  const { slug } = React.use(params);
  const router = useRouter();

  const newsItem = getNewsBySlug(slug);

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
