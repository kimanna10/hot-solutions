"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children, className = "", onClick }) {
  const pathname = usePathname();
  const currentPath = pathname.split("#")[0];
  const linkPath = href.split("#")[0];
  const isActive = currentPath === linkPath;

  return (
    <Link
      href={href}
      className={`transition-colors hover:text-grey-light ${
        isActive ? "text-grey-light" : "text-white"
      } ${className} lg:py-2 lg:px-1.5 px-0 block py-1 `}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
