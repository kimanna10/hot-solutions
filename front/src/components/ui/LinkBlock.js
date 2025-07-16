"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LinkBlock({ href, children, className = "" }) {
  const pathname = usePathname();

  // Проверяем, если текущий путь совпадает со ссылкой на курс
  if (pathname === href) return null;

  return (
    <Link
      href={href}
      className={`px-5 bg-white text-lg font-bold h-[70px] text-primary flex items-center justify-center text-center hover:text-white hover:bg-secondary  transition ${className}`}
    >
      {children}
    </Link>
  );
}
