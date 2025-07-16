"use client";
import Image from "next/image";
import Link from "next/link";

export default function Logo({
  width = 70,
  height = 100,
  href = "/",
  className = "",
}) {
  return (
    <Link href={href} aria-label="На главную" title="На главную">
      <Image
        src="/logo.svg"
        alt="Логотип Hot Solutions"
        width={width}
        height={height}
        className={`${className}`}
        priority
      />
    </Link>
  );
}
