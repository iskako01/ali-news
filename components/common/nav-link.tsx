"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navlink({ href, children }) {
  const path = usePathname();

  function activeLinkClass(linkName: string) {
    return path.startsWith(linkName) ? "nav-link active" : "nav-link";
  }

  return (
    <Link href={href} className={activeLinkClass(href)}>
      {children}
    </Link>
  );
}
