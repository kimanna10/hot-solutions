"use client";
import Image from "next/image";
import Link from "next/link";

export default function Logo({
  width = 500,
  height = 500,
  href = "/",
  className = "",
}) {
  return (
    <Link href={href} aria-label="На главную" title="На главную">
      <Image
        src="/logo.png"
        alt="Логотип Hot Solutions"
        width={width}
        height={height}
        className={`w-20 h-16 ${className} object-contain`}
        priority
      />
    </Link>
  );
}
