"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children, className = "" }) {
  const pathname = usePathname();
  const currentPath = pathname.split("#")[0];
  const linkPath = href.split("#")[0];
  const isActive = currentPath === linkPath;

  return (
    <Link
      href={href}
      className={`py-2 px-1.5 transition-colors hover:text-grey-light ${
        isActive ? "text-grey-light" : "text-white"
      } ${className}`}
    >
      {children}
    </Link>
  );
}
